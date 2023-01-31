
const express = require('express');

const router = express.Router() //Modulo para crear multiples rutas y manteneralas en archivos por separado


router.get("/",(req,res)=>{
    res.render("index.html",{
      title:"PAGINA INICIAL"//enviar variable desde el servidro al archivo ejs de index2
    })  
  })

 router.get("/contac",(req,res)=>{
    res.render("contac.html",{
      title:"contac"//enviar variable desde el servidro al archivo ejs de index2
    })  
  })



  module.exports =router