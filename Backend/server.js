import {createCipheriv,createDecipheriv,scryptSync} from "crypto";
import { ReadStream, createWriteStream } from "fs";
import express from "express";
const app=express();



const encrypt=(filePath,output,algorithm,key,iv)=>{
    const inputFileStream=ReadStream(filePath);
    const outputFileStream=createWriteStream(output);
    const cipher =createCipheriv(algorithm,key,iv);
    let encrypted;
    inputFileStream.on('data',(data)=>{
        encrypted=cipher.update(data)
        outputFileStream.write(encrypted);

    })
    inputFileStream.on('end',()=>{
        outputFileStream.end()
    })  
}


const decrypt=(filePath,output,algorithm,key,iv)=>{
    const inputFileStream=ReadStream(filePath);
    const outputFileStream=createWriteStream(output);
    const decipher=createDecipheriv(algorithm,key,iv);
    let decrypted;
    inputFileStream.on("data",(data)=>{
        decrypted=decipherupdate.update(data)
        outputFileStream.write(decrypted)
    })
    inputFileStream.on("end",()=>{
        outputFileStream.end()
    })

}

const password='0000';
const algorithm='aes-192-cbc';
let key=scryptSync(password,"SALT",24);
let iv=Buffer.alloc(16,0)

// encrypt("./public/tesseract.png","enc.enc",algorithm,key,iv);
// decrypt("enc.enc","./public/tesseract.png",algorithm,key,iv);


app.listen(3000,()=>{
    console.log("Server running on port 3000");
})

