const fs = require('fs');
const http = require('http');

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://drive.google.com/drive/folders/1N8CxSiwAIwoNlrrogPPntTq1nQfosL1g');

  // Wait for the page to load
//   await page.waitForTimeout(5000);

  // Get folder ID
  const folderId = '1N8CxSiwAIwoNlrrogPPntTq1nQfosL1g';

  // Get the file elements inside the folder
  const fileElements = await page.$$eval(`.file-list .file-item`, (elements) => {
    return elements;
  });

  




  
  


  console.log(fileElements)
  // Download each file
  for (const fileElement of fileElements) {
    try {
      const fileName = fileElement.querySelector('.file-content span').innerText.trim();
      const fileDownloadLink = fileElement.querySelector('.file-action a').getAttribute('href');

      console.log(`Downloading ${fileName}...`);

      // Send a GET request to download the file
      http.get(fileDownloadLink, (res) => {
        if (res.statusCode !== 200) {
          console.error(`Failed to download ${fileName}: status code ${res.statusCode}`);
          return;
        }

        const fileStream = fs.createWriteStream(`./${fileName}`);

        res.pipe(fileStream);

        fileStream.on('finish', () => {
          console.log(`Successfully downloaded ${fileName}.`);
        });

        fileStream.on('error', (err) => {
          console.error(`Failed to download ${fileName}: ${err.message}`);
        });
      }).on('error', (err) => {
        console.error(`Failed to download ${fileName}: ${err.message}`);
      });
    } catch (err) {
      console.error(`Error processing file: ${err.message}`);
    }
  }

  await browser.close();
})();