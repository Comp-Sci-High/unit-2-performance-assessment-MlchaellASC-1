const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

console.log("Welcome to the Yu-Gi-Oh Chat bot")
console.log("Pick a card Yu-Gi-Oh card id from the cards below")
console.log("80181649: A Case for K9", "91231901: Cell Recombination", "89474727: Stardust Chronicle Spark Dragon", "35618486:Blue eyes white drago")
const choice = prompt("Enter the card you want to know about");

console.log(`Fetching ${choice} images`);
const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${choice}`;
async function fetchCard(){
const response = await fetch(url);
const data = await response.json();
console.log(data.data[0].card_images[0].image_url);
}
fetchCard();
