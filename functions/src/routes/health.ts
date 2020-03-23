import expressHealthcheck from "express-healthcheck";

export const path = "/health";

export const handler = expressHealthcheck();
