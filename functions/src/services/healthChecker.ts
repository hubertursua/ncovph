
import * as functions from 'firebase-functions';
import Axios from 'axios';
import log from '../utils/log';

const axios = Axios.create({
  baseURL: 'https://ncovph.com/api',
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function checkEndpoint(path: string): Promise<void> {
  try {
    const response = await axios.get(path);

    if (response.status !== 200) {
      throw new Error(`Invalid status code ${response.status}`);
    }

    if (!response.data) {
      throw new Error('Response data is blank');
    }

    let dataObject: unknown;

    try {
      dataObject = JSON.parse(response.data);
    } catch {
      throw new Error('Cannot convert response data to JSON');
    }

    if (typeof dataObject !== 'object' || Array.isArray(dataObject)) {
      throw new Error('Response data is not an array');
    }

    if ((dataObject as Array<unknown>).length === 0) {
      throw new Error('Data is empty');
    }

    // eslint-disable-next-line no-console
    console.log(`${path} is OK`);
  } catch (error) {
    throw new Error(`${path}: ${error.message}`);
  }
}

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 120,
  })
  .pubsub
  .schedule('every 1 hours')
  .onRun(async () => {
    // eslint-disable-next-line no-console
    console.log(`Checking health status of API: ${new Date().toISOString()}`);

    try {
      await checkEndpoint('/counts');
      await checkEndpoint('/confirmed-cases');
      await checkEndpoint('/ofw-cases');
      await checkEndpoint('/foreign-national-cases');
      await checkEndpoint('/hospitals');
    } catch (error) {
      log.error(error);
    }

    return null;
  });
