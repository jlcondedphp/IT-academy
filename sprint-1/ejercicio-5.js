
//Level 1/ Exercise 1

const write = require('fs');

function writeFile(file, phrase) {
    write.writeFile(file, phrase, function (error) {
        if (error) {
            console.log("The document contains a error");
        } else {
            console.log(`The file ${file} contains the phrase ${phrase}`);
        }
    });
};
writeFile('file2', '"this is the text of phrase"');



//Level 1/ Exercise 2

const read = require('fs');

function readFile(file) {
    read.readFile(file, function (error, data) {
        if (error) {
            console.log(`Error reading the file ${file}`);
        } else {
            console.log(`The file ${file} contains the following text: ${data}`);
        }
    });
}
readFile("file.txt");


//Level 1/ Exercise 3

const compress = require('fs');
const zlib = require('zlib');

const inputFile = 'file.txt';
const outputFile = 'outputFile.txt.gz';

const inputStream = compress.createReadStream(inputFile);
const outputStream = compress.createWriteStream(outputFile); 2

const gzip = zlib.createGzip();
inputStream.pipe(gzip).pipe(outputStream);

outputStream.on('finish', () => {
    console.log(`the file ${inputFile} has been compressed ${outputFile}.`);
});

//Level 2/ Exercise 1

function printDelay(phrase, timeDelay) {
    console.log(phrase);
    setTimeout(() => {
        printDelay(phrase, timeDelay);
    }, timeDelay);
}
printDelay("This is a recursive function", 1000);


//Level 2/ Exercise 2

const { exec } = require('child_process');

function listDirectoryUsers() {
    exec('dir C:\\Users\\%USERNAME%', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
}

listDirectoryUsers();



//Level 3
const codefs = require('fs');
const crypto = require('crypto');

function codifyFiles(data, file) {

    const buffer = Buffer.from(data);
    const hex = buffer.toString('hex');
    const base64 = buffer.toString('base64');


    codefs.writeFile(`${file}.hex`, hex, function (error) {
        if (error) {
            console.error(`Error file hexadecimal: ${error}`);
        } else {
            console.log(`file hex create in  ${file}.hex`);
        }
    });

    codefs.writeFile(`${file}.base64`, base64, function (error) {
        if (error) {
            console.error(`Error file base64: ${error}`);
        } else {
            console.log(`file base64 create in ${file}.base64`);
        }
    });
}


const data = 'Dates to codify...';
const file = 'file.txt';
codifyFiles(data, file);
