
const exec = require('child_process').exec;
const my_constants = require('./constant');

const runCommand = async () => {
    return new Promise((resolve, reject) => {
        exec(my_constants.COMMAND, async function (error, stdout, stderr) {

            // if error occurs in curl command
            if (error !== null) {
                return reject(error);
            }

            try {
                const containersStatus = [];

                const result = JSON.parse(stdout);

                for (let i = 0; i < result.length; i++) {
                    if (result[i].State !== "running") {
                        const tempObj = {
                            Id: result[i].Id,
                            Name: result[i].Names,
                            State: result[i].State
                        }
                        containersStatus.push(tempObj);
                    }
                }

                return resolve(containersStatus);
            } catch (error) {
                return reject(error);
            }
        });
    })
}

module.exports = { runCommand }