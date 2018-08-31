// Para que nuestro archivo sea ejecutable por node
// #! / usr / bin / env node
// El modulo fs nos permite trabajar con los archivos del sistema operativo
const fs = require ('fs');
// const readReadme = () => {
//   fs.readFile('./README.md','utf8',(err,data)=>{
//     if(err){
//       console.log('error');
//     } else {
//       callBack(data)
//     }
//     })
// }
//
// readReadme(callBack = data => console.log(data));

const getURL = (err, data) => {
  if(err){
     console.log('No tienes README.md');
   } else {
     let text = data;
     console.log(data);
     let expression = //
     console.log(text.match(expression));
   }
};

fs.readFile('./README.md','utf8',getURL)
