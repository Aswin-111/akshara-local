const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://drive.google.com/drive/folders/1N8CxSiwAIwoNlrrogPPntTq1nQfosL1g');

  // Wait for the page to load
//   await page.waitForNavigation({ waitUntil: 'networkidle2' });

  // Get the folder names
  const folderNames = await page.$$eval('.tyTrke.M3pype', (folders) => {
    console.log(folders)
    return folders.map((folder) => folder.querySelector('.uXB7xe').textContent);
  });


  const folders = await page.$$eval('.tyTrke.M3pype', (folders) => {
    console.log(folders)
    return folders.map((folder) => folder.querySelector('.uXB7xe'));
  });
  let scraped_links = folders.map(i=>{
    let link = i['__incrementalDOMData']['key']

    
    
    

    
    
    
    return String(link).split(":")[String(link).split(":").length - 1]

}







)

  console.log(folderNames, "contents");
  console.log(folders, "contents");
scraped_links.shift()
  // Download each folder
  for (const folderName of scraped_links) {
    const folderUrl = `https://drive.google.com/drive/folders/${folderName}`;
    await page.goto(folderUrl);

    // Wait for the folder to load
    await page.waitForSelector('.file-list');

    // Get the file links
    const fileLinks = await page.$$eval('.file-list a', (links) => {
      return links.map((link) => link.href);
    });
    const file = await page.$$eval('.file-list a', (links) => {
        return links.map((link) => link.href);
      });
    console.log(fileLinks);

    // Download each file
    for (const fileLink of fileLinks) {
      const fileUrl = fileLink.href;
      const filePath = `/path/to/download/dir/${fileLink.href.split('/').pop()}`;
      try {
        const response = await page.goto(fileUrl, { waitUntil: 'networkidle2' });
        const fileBuffer = await response.buffer();
        fs.writeFileSync(filePath, fileBuffer);
        console.log(`Downloaded ${fileLink.href} to ${filePath}`);
      } catch (error) {
        console.error(`Error downloading ${fileLink.href}: ${error.message}`);
      }
    }
  }

  await browser.close();
})();