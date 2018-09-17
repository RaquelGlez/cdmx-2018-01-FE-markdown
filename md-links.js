// El modulo fs nos permite trabajar con los archivos del sistema operativo
const fs = require ('fs');
// El modulo path nos proporciona utilidades para trabajar con rutas de archivos y directorios
const path = require('path');
const fetch = require('node-fetch');


// Guardamos la ubicación de nuestro documento de texto plano en una variable
const file = 'README.md'

const definePathAbs = (bypath) => {

    return new Promise((resolve, reject) => {
        if(!path.isAbsolute(bypath)){
            let pathAbs = path.resolve(bypath)
            resolve(pathAbs)
            console.log(pathAbs)
        } else {
            reject('No tienes README.md')
        }
    })
};

//definePathAbs(file)
const getUrl = (pathAbs) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(pathAbs,'utf8',(err,data) =>{
            if(err){
                return reject(err)
            } else{
                let text = data;
                console.log(data);
                let reExpUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/\/=]*)/gim;
                let reExprDescription = /\[([^\]]*)\]/gim;
                let urls = text.match(reExpUrl)
                let descriptions= text.match(reExprDescription)
                console.log(urls)
                console.log(descriptions)
                resolve(urls,descriptions)
            }

        })
    })
}

const verifyUrl = (urls) => {
    return new Promise((resolve, reject) => {
        if(urls){
            for (let i=0; i < urls.length; i++){
                let url = urls[i];
                // console.log(url)
                fetch(url).then(res =>{
                    //console.log(res.status)
                    if(res.status == 404){
                        urlStatus = 'fail 404';
                    } else {
                        urlStatus = 'ok 200';
                    }
                    resolve(urlStatus)
                    console.log(urlStatus)
                })
            }
        } else {
            reject(err)
        }
    })
};

definePathAbs(file)
.then(response => getUrl(response))
.then(response => verifyUrl(response))
.catch(err => console.log('Hubo un error: ' + err.message))

module.exports = {
    definePathAbs,
    getUrl,
    verifyUrl
}