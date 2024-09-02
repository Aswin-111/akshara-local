const express = require("express")
const cors = require("cors")
const Language = require("./models/language");
const Coords = require("./models/coords");
const sequelize = require("./models/index");
const app = express()



app.use(cors())
app.use(express.json())

// app.post('/api/setcoords', async (req,res) =>{
//   const {country,state,coords} = req.body
//   console.log(country,state,coords)

//   try {
//    // Fetch the record
// const record = await Coords.findOne({
//   where: {
//       Country: country,
//       State: state
//   }
// });

// // Check if a record was found
// if (record) {
//   // Update the coords


  

  
// await sequelize.query(`UPDATE coords SET Coords = "${JSON.stringify(Array(coords))}" WHERE Country = "${country}" AND State = "${state}"`)
  
//   console.log("Record updated successfully");
// return res.status(200).json({ status: "success", data:"Record updated successfully" });


// }
    
    

//     // Return success response with updated records
   

// } catch (error) {
//     console.error('Error updating coordinates:', error);
//     // Return error response
//     return res.status(500).json({ status: "error", message: "An error occurred while updating coordinates." });
// }
// // catch(err){


    
// //     console.log(err);
    
// //  return res.status(500).json({status : "failed", err : err})


// //   }


// })


app.post('/api/setcoords', async (req, res) => {
  const { country, state, coords } = req.body;
  console.log(country, state, coords);

  try {
    // Find the record
    const [record, created] = await Coords.findOrCreate({
      where: { Country: country, State: state },
      defaults: { Coords: coords }
    });

    if (!created) {
      // If the record already existed, update it
      await record.update({ Coords: coords });
    }

    console.log("Record updated successfully");
    return res.status(200).json({ status: "success", message: "Record updated successfully" });

  } catch (error) {
    console.error('Error updating coordinates:', error);
    return res.status(500).json({ status: "error", message: "An error occurred while updating coordinates." });
  }
});
app.post('/api/getcoords', async (req,res) =>{
  const {country} = req.body
  console.log(country)
  try{
 const get_all_langs = await sequelize.query("SELECT * FROM coords WHERE Coords IS NULL")
console.log(country,get_all_langs);

 return res.status(200).json({status : "success", data : get_all_langs})
  }
  catch(err){

    
    console.log(err);
    
 return res.status(500).json({status : "failed", err : err})


  }
})




app.get('/api/coords', async (req,res) =>{
 
  


  try{
 const response = await sequelize.query("SELECT * FROM Coords WHERE Coords IS NOT NULL")
console.log(response);

 return res.status(200).json({status : "success", data : response})
  }
  catch(err){

    
    console.log(err);
    
 return res.status(500).json({status : "failed", err : err})


  }
})
app.post('/api/getallcountrydetails', async (req,res) =>{
  const {country} = req.body
  console.log(country)
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












app.post('/query', async (req,res) =>{
  const {query} = req.body

 
 
 
 const response =  await sequelize.query(query)

 




 
 
 console.log(response)
 return res.json({data : response.data})

}
)