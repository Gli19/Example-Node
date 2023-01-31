const express= require('express');


const path =require('path');

const app =express()




/*SETTING */
app.set("port",3000) //guardar constante 

app.engine("html",require('ejs').renderFile)  //Usar los archivos html pero los archivos html serna procesados por ejs 

app.set("view engine","ejs")//para definir que motor de plantilla usar en este caso "ejs"
app.set('views',path.join(__dirname,'views'))  //definir la ubicacion de la ruta views 





app.use(require('./routes/index'))//ruta que sera importada para usarla 


/*ROUTES */
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+"/views/index.html"))// se realiza esto ya que necesita una ruta absoluta o completa c://user//  dirname__ da la ruta hasta src/    path maneja el orden las rutas /\ linux o windows
// })


/*STATIC FILE 
CARPETAS PUBLICAS QUE PUEDAN SER ACCEDIDAS DESDE CUALQUIER RUTA
*/

app.use(express.static(path.join(__dirname,"public")))//cualuqier otro archivo podra acceder a esta carpeta que puede contenr js,css,html





app.listen(app.get("port"),()=>{ 
    console.log("Servidor en 3000");
})