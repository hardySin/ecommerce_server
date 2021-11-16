import multer from "multer"
import path from "path";
const fs = require('fs');


const storage= multer.diskStorage({
    destination:function(req:any,file:any,cb:any)
    {
        
             cb(null, './uploads/');
         
        },
    filename:function(req:any,file:any,cb:any)
    {       
        cb(null, file.originalname)
      }
})  

const fileFilter = (req: any,file: any,cb: any) => {
    if(file.mimetype === "image/jpg"  || file.mimetype ==="image/jpeg"  || file.mimetype ===  "image/png"){
     
    cb(null, true);
   }else{
      cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
}
}
const upload = multer({storage: storage, fileFilter : fileFilter});

export default upload;
 