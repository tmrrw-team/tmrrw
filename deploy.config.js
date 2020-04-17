const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const fs = require('fs');
const dotenv = require('dotenv');
const {
    DEPLOY_USER,
    DEPLOY_HOST,
    DEPLOY_PORT,
    DEPLOY_PASS,
} = dotenv.parse(fs.readFileSync('.env.local'));

const config = {
    user: DEPLOY_USER,
    host: DEPLOY_HOST,
    port: DEPLOY_PORT,
    password: DEPLOY_PASS,

    localRoot: __dirname + "/dist",
    remoteRoot: "/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["*.map"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

// use with promises
ftpDeploy.deploy(config)
    .then(res => {
        console.log("finished:", res)
        process.exit(0);
    })
    .catch(err => console.log(err));
