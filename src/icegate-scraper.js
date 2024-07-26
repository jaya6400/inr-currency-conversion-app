require('dotenv').config()
const ScrapingAntClient = require('@scrapingant/scrapingant-client');

apikeyvalue=process.env.API_KEY;
const client = new ScrapingAntClient({ apiKey: `${apikeyvalue}`});

// Scrape the icegate portal.
client.scrape('https://foservices.icegate.gov.in/#/services/viewExchangeRate')
    .then(res => console.log(res))
    .catch(err => console.error(err.message));






// Import the necessary libraries
// const axios = require('axios');
 //const cheerio = require('cheerio');
 
 // The web scraping function
// async function scrapeWebPage(url) {
     // Fetch the webpage
    // const response = await axios.get(url);
     // Parse the HTML content of the webpage
//     const $ = cheerio.load(response.data);
     
     // Use Cheerio to extract the required data
     // Here's an example to scrape paragraph text
  //   $('p').each((i, element) => {
  //       console.log($(element).text());
   //  });
// }
 
 // Run the function with the URL of the webpage you want to scrape
 //scrapeWebPage('https://foservices.icegate.gov.in/#/services/viewExchangeRate');
 