const moment = require('moment');

function formatMessage(username, text) {
  console.log(username);
 
  return {
    username,
    text,
    _time: moment().format('h:mm a')
  };
 
}

module.exports = formatMessage;
