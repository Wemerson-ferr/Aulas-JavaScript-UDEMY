const fs = require('fs').promises;//file system para manipular arquivos no sistema.
const path = require('path');


async function readdir(rootdir){
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir);//Lê o diretório enviado

    walk(files, rootdir)
}

async function walk(files, rootdir){
    for(let file of files){
        const fileFullPath = path.resolve(rootdir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        console.log(fileFullPath);
    }
}

readdir('D:/Aulas JavaScript UDEMY/');