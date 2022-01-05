const fs = require('fs');

const archivo = './db/database.json';

const guardarDb = (data) =>{
    
    fs.writeFileSync(archivo, JSON.stringify(data), {flags: 'a+'});
}

const leerDb = () =>{

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf8'});
    const data = JSON.parse(info);
    //console.log(data);
    return data;
}

module.exports = {
    guardarDb,
    leerDb
};