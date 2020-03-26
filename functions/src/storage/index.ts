import fs from "fs";
import os from "os";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Bucket } from "@google-cloud/storage";
import admin from "../firebase";

export const TMP_DIR = os.tmpdir();

class Storage {
  private storageRef: Bucket;

  constructor() {
    this.storageRef = admin.storage().bucket("ncovidtracker-api.appspot.com");
  }

  createTmpDir() {
    if (!fs.existsSync(TMP_DIR)) {
      fs.mkdirSync(TMP_DIR);
    }
  }

  async upload(data: object, destStoragePath: string): Promise<void> {
    const sourceLocalPath = await this.writeTmpFile(data);

    await this.storageRef.upload(sourceLocalPath, {
      destination: destStoragePath,
      private: true,
    });

    await this.deleteTmpFile(sourceLocalPath);
  }

  async get(storagePath: string): Promise<object> {
    try {
      return JSON.parse(
        (
          await this.storageRef.file(storagePath).download()
        )[0].toString('utf8')
      );
    } catch (error) {
      throw error;
    }
  }

  private async writeTmpFile(data: object): Promise<string> {
    const tmpFile = path.join(TMP_DIR, `${uuidv4()}.json`);

    await new Promise((resolve, reject) => {
      fs.writeFile(
        tmpFile,
        JSON.stringify(data, null, 2),
        { encoding: "utf8" },
        (error) => {
          if (error) {
            return reject(error);
          }

          resolve();
        });
    });

    return tmpFile;
  }

  private async deleteTmpFile(filePath: string): Promise<void> {
    if (!filePath.startsWith(TMP_DIR)) {
      throw new Error("This is not a tmp file.");
    }

    await new Promise((resolve, reject) => {
      fs.unlink(
        filePath,
        (error) => {
          if (error) {
            return reject(error);
          }

          resolve();
        });
    });
  }
}

export default new Storage();
