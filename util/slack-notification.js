const axios = require('axios');
const  Constants = require('./constant')

// function for sending notification to slack
const sendNotification = async (message) => {

  const url = 'https://slack.com/api/chat.postMessage';

  const res = await axios.post(url, {
    channel: Constants.SLACK_CHANNEL,
    text: formateMessage(message)
  }, { headers: { authorization: `Bearer ${Constants.SLACK_TOKEN}` } });
  return res;
}

// formate message for slack
const formateMessage = (message) => {
  if (message.length === 0) return "All containers are in *healthy state*\n" + `*HostName*: ${Constants.HOST_NAME} \n *IP*: ${Constants.HOST_IP}\n`;
  let fMessage = "*State* of Containers are: \n" + `*HostName*: ${Constants.HOST_NAME} \n *IP*: ${Constants.HOST_IP}\n`;

  for (let i = 0; i < message.length; i++) {
    let tempStr = `>Id:*${message[i].Id}* \n> Name:${message[i].Names} \n> State:*${message[i].State}*`;
    fMessage = fMessage + `${tempStr}` + "\n>\n";
  }
  return fMessage;
}

module.exports = { sendNotification, formateMessage };
