import express, { Router } from "express";
import upload from "../middleware/multer";
const router: Router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct } = require('../controllers/product');
const { createCategory, getAllCategory } = require('../controllers/Category');
const { createUser, findAllUsers } = require('../controllers/user');
const { getDescription, updateProductDescription } = require('../controllers/productDescription');
const { getGeneralInfo, updateGeneralInfo ,createGeneralInfo} = require('../controllers/generalInfo');
const { getProductImage, addProductImage } = require('../controllers/productImage');

router.post('/common', ()=>{console.log("welcome to the Ecommmerce")})

//product
router.post('/addproduct', createProduct)
router.get('/getAllProducts', getAllProducts)

//GerenalInfo
router.post('/createGeneralInfo', createGeneralInfo)

 
//view 
router.post('/getProduct', getProduct)
router.post('/getDescription', getDescription)
router.post('/getGeneralInfo', getGeneralInfo)
router.post('/getProductImage', getProductImage)
//edit
router.post('/updateGeneralInfo', updateGeneralInfo)
router.post('/updateProductDescription', updateProductDescription)
router.post('/updateProduct', updateProduct)
router.post('/addProductImage', upload.array('images', 5), addProductImage)




//category
router.post('/addCategory', createCategory)
router.get('/getAllCategory', getAllCategory)

//user
router.post('/createUser', createUser)
router.get('/findAllUsers', findAllUsers)




export default router;
