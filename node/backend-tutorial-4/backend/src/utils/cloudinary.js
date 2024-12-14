import {v2 as cloudinary} from 'cloudinary';

import fd from 'form-data';

import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
 
const uploadToCloudinary = async (file) => {
    try{
        if(!file){
            return null;
        }  
        const await responseVar = await cloudinary.uploader.upload(file, {
            folder:'video-sharing-app',
            resource_type:'auto'
        });
        
    }
    catch(error){
        fs.unlinkSync(file);//remove the locally saved temp file
        console.log(error);

    }
};