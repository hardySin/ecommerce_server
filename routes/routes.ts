import express, { Router} from "express" ;
import upload from "../middleware/multer";
const router:Router = express.Router();
const {createProduct,getAllProducts} = require('../controllers/product');
const {createCategory ,getAllCategory} = require('../controllers/Category');
const {createUser,findAllUsers} = require('../controllers/user');

// router.post('/addproduct',upload.array('images',5),createProduct)
//product
router.post('/addproduct',createProduct)
router.get('/getAllProducts',getAllProducts)

//category
router.post('/addCategory',createCategory)
router.get('/getAllCategory',getAllCategory)

//user
router.post('/createUser',createUser)
router.get('/findAllUsers',findAllUsers)
  
 
 

export default router;
