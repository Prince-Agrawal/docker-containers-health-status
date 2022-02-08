const COMMAND = 'curl -XGET --unix-socket /var/run/docker.sock http://localhost/containers/json?all=1'
const RUNNING = 'running';

const THREAD_SLEEP_TIME = process.env.TIME_INTERVEL || 300000; // defualt time 5 min
const SLACK_CHANNEL = process.env.SLACK_CHANNEL ;
const SLACK_TOKEN = process.env.SLACK_TOKEN;
const HOST_NAME = process.env.HOST_NAME || "-"
const HOST_IP = process.env.HOST_IP || "-"

module.exports = { COMMAND, RUNNING, THREAD_SLEEP_TIME , SLACK_CHANNEL , SLACK_TOKEN , HOST_NAME , HOST_IP};
