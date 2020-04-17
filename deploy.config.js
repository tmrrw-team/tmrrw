var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "cy92029_robot",
    host: "vh190.timeweb.ru",
    port: 21,
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
ftpDeploy
    .deploy(config)
    .then(res => {
        console.log("finished:", res)
        process.exit(0);
    })
    .catch(err => console.log(err));

