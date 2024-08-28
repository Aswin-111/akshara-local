const express = require("express")
const cors = require("cors")
const Language = require("./models/language");
const app = express()



app.use(cors())
app.use(express.json())




app.post('/api/getlangbycountry', async (req,res) =>{

  const {country} = req.body
  try{
 const get_all_langs = await Language.findAll({where : {Countries : country}})
console.log(country,get_all_langs);




 






 return res.status(200).json({status : "success", data : get_all_langs})
  }
  catch(err){

    
    console.log(err);
    
 return res.status(500).json({status : "failed", err : err})


  }
})

app.post('/api/getdetails', async (req,res) =>{

  const {target} = req.body
  try{









const data =  await Language.findOne({where : {Name : target}})





 






 return res.status(200).json({status : "success",data})
  }
  catch(err){

    
    console.log(err);
    
    
 return res.status(500).json({status : "failed", err : err})


  }
})
app.listen(5000,()=>{
  console.log("Server has started listening on port : 5000")
})