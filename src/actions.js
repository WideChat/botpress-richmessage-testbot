/**
 * Description of the action goes here
 */

const attachmentDict = {
  "text button with url": [{
      "title": "text button with url",
      "actions": [
        {
          "type": "button",
          "text": "Book flights",
          "url": "http://www.kayak.com",
          "is_webview": false
        }
      ]
    }],
  "text button with msg in chat window":[{
      "title": "text button with msg in chat window",
      "actions": [
        {
          "type": "button",
          "text": "Say hello in chat window?",
          "msg": "hello in chat window",
          "msg_in_chat_window": true
        }
      ]
    }],
  "image button with url":[{
      "title": "image button with url",
      "actions": [
        {
          "type": "button",
          "url": "http://www.kayak.com",
          "image_url": "http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png",
          "is_webview": false
        }
      ]
    }],
  "image button with msg in chat window":[{
      "title": "image button with msg in chat window",
      "actions": [
        {
          "type": "button",
          "image_url": "http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png",
          "msg": "I clicked the airplane",
          "msg_in_chat_window": true
        }
      ]
    }],
  "multiple text buttons":[{
      "title": "multiple text buttons with url",
      "actions": [
        {
          "type": "button",
          "text": "Book flights",
          "url": "http://www.kayak.com",
          "is_webview": false
        },
        {
          "type": "button",
          "text": "Cancel travel request",
          "url": "https://requests.example.com/cancel/r123456",
          "is_webview": false
        }
      ]
    }],
  "horizontal text buttons":[{
      "title": "horizontal text buttons with url",
      "button_alignment": "horizontal",
      "actions": [
        {
          "type": "button",
          "text": "Book flights",
          "url": "http://www.kayak.com",
          "is_webview": false
        },
        {
          "type": "button",
          "text": "Cancel travel request",
          "url": "https://requests.example.com/cancel/r123456",
          "is_webview": false
        }
      ]
    }],
  "attachment with buttons":[{
      "title": "Lauri M(title field)",
      "title_link": "https://www.basketball-reference.com/players/m/markkla01.html",
      "text": "Should have been rookie of the year (text field)",
      "description": "What a great player! (description field)",
      "image_url": "http://www.trbimg.com/img-5b04c449/turbine/ct-spt-bulls-lauri-markkanen-all-rookie-team-20180522",
      "actions": [
        {
          "type": "button",
          "text": "Book flights",
          "url": "https://www.kayak.com",
          "is_webview": false
        },
        {
          "type": "button",
          "text": "Cancel travel request",
          "url": "https://www.kayak.com",
          "is_webview": false
        }
      ]
    }]
};

const replyDict = {
  "hello in chat window": "received your ‘hello in chat window’",
  "I clicked the airplane": "received your response about clicking the airplane"
}

async function richMessageAction(state, event, params) {
  if(event.platform=='rocketchat' && event.type=='message'){
    var text = event.text;

    if (text in attachmentDict){
      await event.bp.rocketchat.sendAttachments(event.channel, attachmentDict[text], event);
    } else if(text in replyDict){
      await event.bp.rocketchat.sendText(event.channel, replyDict[text], event);
    }
  }

  var returnState = Object.assign({}, state);
  return returnState;
}

module.exports = { richMessageAction }
