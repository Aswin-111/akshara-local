const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://drive.google.com/drive/folders/1N8CxSiwAIwoNlrrogPPntTq1nQfosL1g');
  await page.waitForSelector('.tyTrke.M3pype', { timeout: 5000 });
 
  const folderNames = await page.$$eval('.tyTrke.M3pype', (folders) => {
    console.log(folders)
    return folders.map((folder) => folder.querySelector('.uXB7xe').textContent);
  });

  const folders = await page.$$eval('.tyTrke.M3pype', (folders) => {
    
    return folders.map((folder) => folder.querySelector('.uXB7xe'));
  });
  console.log(folders)
  let scraped_links = folders.map(i => {
    let link = i['__incrementalDOMData']['key']

    return String(link).split(":")[String(link).split(":").length - 1]
  })

  // console.log(folderNames, "contents");
  console.log(folders, "contents");
  scraped_links.shift()

  // Download each folder
  for (const folderName of scraped_links) {
    const folderUrl = `https://drive.google.com/drive/folders/${folderName}`;
    await page.goto(folderUrl);

    // Get the file links
    const fileLinks = await page.$$eval('.Q5txwe', (files) => {
      return files.map((file) => file.querySelector('.a-s-f-a-kb'));
    });

    console.log(fileLinks)
    // Download each file
    for (const fileLink of fileLinks) {
      const fileName = path.basename(fileLink);
      const filePath = `./downloads/${fileName}`;
      const fileStream = fs.createWriteStream(filePath);
      const response = await page.goto(fileLink, { stream: true });
      response.body.pipe(fileStream);
      console.log(`Downloaded ${fileName}`);
    }
  }

  await browser.close();
})();