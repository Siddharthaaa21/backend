// documentation
// meamory storage and disk storage
//MONITORING FILE UPLOADS
//Multer also provides a fileFilter option to control which files are accepted.
//The fileFilter option is a function that takes three arguments: req, file, and callback.

//
import multer from "multer";

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "./public/temp")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});

export const upload = multer({ 
    storage, 
}) //exporting the upload function