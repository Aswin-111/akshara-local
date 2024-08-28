const seq = require('./models/index')
const lang = require('./models/language.json')
const fs = require('fs'); 

  
  
const updatedLang = lang.map(obj =>{
    const newObj = {};
    for (let key in obj) {
      // Replace spaces with underscores

      if(key.includes(" ") && key != ""){
      let newKey =  key
      newKey = newKey.replace(/ /g, '_');
      if(newKey.includes("(Yes/No)")){
        

        newKey = newKey.replace("(Yes/No)","");
      }


      newKey = newKey[newKey.length - 1] === "_" ? newKey.slice(0,newKey.length - 1) : newKey;
      newKey = newKey === "No_of_speakers" ? "Num_of_speakers" : newKey;


      newKey = newKey === "ISO_639-3" ? "ISO_639_3" : newKey;

      // Assign the value to the new key in the new object
      newObj[newKey] = obj[key];
      }
      else{


        if(key){
newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  });
  
  // Output the updated array of objects
  console.log(updatedLang);
 




fs.writeFileSync("lang.json",JSON.stringify(updatedLang), (err) => {
if (err)
	console.log(err);
else {
	console.log("File written successfully\n");
	console.log("The written has the following contents:");
	console.log(fs.readFileSync("lang.json", "utf8"));
}
});
