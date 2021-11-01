const functions = require("firebase-functions");
const express = require("express");
const router = require("./src/routers");

const app = express();
app.use("/api", router);

const runtimeOpts = {
  timeoutSeconds: 3600,
  memory: "1GB",
};

exports.app = functions.runWith(runtimeOpts).https.onRequest(app);
