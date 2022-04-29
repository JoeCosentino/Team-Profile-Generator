const fs = require('fs');

const writeFile = fileData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileData, err => {
            if (err) {
                reject(err);
            }

            resolve({
                ok: true,
            });
        })
    }) 
}

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
            });
        });
    });
}



module.exports = { writeFile, copyFile };