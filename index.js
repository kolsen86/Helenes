
const accountSid = "AC8bda232062fa59a3cf52ffc29faac3ed";
const authToken = "93ca90063b9a718f5531863b254febb9";

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

client.messages.create({
  body: "You just won $20,000!!!!  All you have to do to recieve your money is record yourself doing 20 jumping jacks and upload it to YouTube/PublishersClearingHouse",
  to: "+13132470516",
  from: "+13134668608"
})
.then((message) => console.log(message.sid));