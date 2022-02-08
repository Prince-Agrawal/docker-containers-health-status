
const exec = require('child_process').exec;
const Constants = require('./constant');

const getDockerContainersStatusApi = async () => {
  return new Promise((resolve, reject) => {
    exec(Constants.COMMAND, async function (error, stdout, stderr) {

      // if error occurs in curl command
      if (error) {
        return reject(error);
      }

      try {

        const result = JSON.parse(stdout);

        const notRunningContainers = result.filter(res => {

          if (res.State !== Constants.RUNNING) {
            return {
              Id: res.Id,
              Name: res.Names,
              State: res.State
            }
          }
        })
        // console.log(notRunningContainers , "cccccccccccccccccccccccccccccccc");
        return resolve(notRunningContainers);
      } catch (error) {
        return reject(error);
      }
    });
  })
}

module.exports = { getDockerContainersStatusApi }