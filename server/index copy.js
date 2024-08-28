
const Language = require("./models/language")
const lang = require("./lang.json")

lang.forEach(element => {
    async function seed(){
    
       
        console.log(element);
        
        
    await Language.create({
            
            Name: element.Name,
            WALS_code: element.WALS_code,
            ISO_639_3: element.ISO_639_3,
            Genus: element.Genus,
            Family: element.Family,
            Macroarea: element.Macroarea,
            Latitude: element.Latitude,
            Longitude: element.Longitude,
            Countries: element.Countries,
            Current_Status: element.Current_Status,
            Script: element.Script === "yes" ? true : false,
            Using_Scripts: element.Using_Scripts,
            Alphabets: element.Alphabets,
            Sub_Languages: element.Sub_Languages,
            Reference: element.Reference,
            Tribal_Language: element.Tribal_Language === "yes" ? true : false,
            Num_of_speakers: element.Num_of_speakers,
            Census_Year: element.Census_Year,
            Other_Names: element.Other_Names
          })
        }
    
        seed()
});