require('dotenv').config()


// global variables
let pArr = [];

const {sleep} = require('./util/sleep');

const {slackNotification} = require('./util/send-slack-notification')
const {runCommand} = require('./util/docker-curl-command')

const dockerContainerHealthStatus = async () => {

    while (true) {
        //running docker curl command 
        try {

            const runOutput = await runCommand();

            const res = await slackNotification(runOutput);
            if (res.data.ok === false) {
                throw new Error("Enter Valid Slack Token");
            }

            await sleep(process.env.TIME_INTERVEL || 1000);

        } catch (error) {
            console.log(error);
            return;
        }
    }
}

dockerContainerHealthStatus();


