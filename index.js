require('dotenv').config()

// global variables
let pArr = [];

const { sleep } = require('./util/sleep');
const Constants = require('./util/constant');

const { sendNotification } = require('./util/slack-notification')
const { getDockerContainersStatusApi } = require('./util/docker-apis')

const dockerContainerHealthStatus = async () => {

  while (true) {
    //running docker curl command 
    try {

      const containersStatus = await getDockerContainersStatusApi();

      const res = await sendNotification(containersStatus);
      if (res.data.ok === false) {
        throw new Error("Enter Valid Slack Token");
      }

      await sleep(Constants.THREAD_SLEEP_TIME);

    } catch (error) {
      console.log(error);
      return;
    }
  }
}

dockerContainerHealthStatus();


