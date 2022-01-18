const axios = require('axios');
const {systemIp , systemHostName} = require('./system-details-generator')

// function for sending notification to slack
const slackNotification = async (message) => {

    const url = 'https://slack.com/api/chat.postMessage';

    const res = await axios.post(url, {
        channel: process.env.SLACK_CHANNEL || 'alerts',
        text: formateMessage(message)
    }, { headers: { authorization: `Bearer ${process.env.SLACK_TOKEN}` } });
    return res;
}

// formate message for slack
const formateMessage = (message) => {
    if (message.length === 0) return "All containers on are in *healthy state*\n" + `*HostName*: ${systemHostName} \n *IP*: ${systemIp}\n`;
    let fMessage = "*State* of Containers are: \n" + `*HostName*: ${systemHostName} \n *IP*: ${systemIp}\n`;

    for (let i = 0; i < message.length; i++) {
        let tempStr = `>Id:*${message[i].Id}* \n> Name:${message[i].Name} \n> State:*${message[i].State}*`;
        fMessage = fMessage + `${tempStr}` + "\n>\n";
    }
    return fMessage;
}

module.exports = { slackNotification , formateMessage };