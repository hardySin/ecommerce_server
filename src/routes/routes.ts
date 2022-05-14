import express, { Router } from "express";
import upload from "../middleware/multer";
const router: Router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct } = require('../controllers/product');
const { createCategory, getAllCategory } = require('../controllers/category');
const { createUser, findAllUsers } = require('../controllers/user');
const { getDescription, updateProductDescription } = require('../controllers/productDescription');
const { getGeneralInfo, updateGeneralInfo, createGeneralInfo } = require('../controllers/generalInfo');
const { getProductImage, addProductImage } = require('../controllers/productImage');
import { getAllSpecificationGroup, AddSpecificationGroup } from '../controllers/specification_group';
import { addSpecification, getAllSpecification, deleteSpecification } from "../controllers/specification";

router.get('/common', () => { console.log("welcome to the commerce") })

//product
router.post('/addproduct', createProduct)
router.get('/getAllProducts', getAllProducts)

//GerenalInfo
router.post('/createGeneralInfo', createGeneralInfo)

//getAllSpecificationGroup
router.get('/getAllSpecificationGroup', getAllSpecificationGroup)
router.post('/addSpecificationGroup', AddSpecificationGroup)

//getAllSpecification
router.get('/getAllSpecification', getAllSpecification)
router.post('/addSpecification', addSpecification)
router.post('/deleteSpecification', deleteSpecification)


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
