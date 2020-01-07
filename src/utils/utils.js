const path = require("path");
const fs = require("fs");

class Utils {
  static get config() {
    let mongoURL;
    let serverPort;
    if (process.env.NODE_ENV == "dev") {
      mongoURL = `${process.env.DEV_MONGO_SERVER}:${process.env.DEV_MONGO_PORT}`;
      serverPort = `${process.env.DEV_PORT}`;
    } else if (process.env.NODE_ENV == "prod") {
      mongoURL = `${process.env.MONGO_PREFIX}${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_ATLAS_URI}`;
    } else {
      throw new Error("server config error");
    }

    return { mongoURL, serverPort };
  }

  static readFile() {
    const fpath = path.join(__dirname, "../../public/json/dataFormat.json");

    let content = fs.readFileSync(fpath, "utf8");

    console.log(JSON.parse(content));
  }
}

module.exports = Utils;
