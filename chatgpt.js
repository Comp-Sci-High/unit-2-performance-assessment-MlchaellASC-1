const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let url = "https://api.openai.com/v1/responses";
async function getAnswer() {
const options = {
method: "POST",
headers : {
    Authorization: `Bearer ` + apiKey,
   "Content-Type": "application/json"
},
body:JSON.stringify({
    model: prompt ("What version do you want to use: "),
    input:prompt ("what do you wanna ask ChatGPT: ")
})

}
const response = await fetch(url, options);
const data = await response.json();
console.log(data.output[0].content[0].text);
return data;
}
console.log("Welcome to Chatgpt")
getAnswer();
