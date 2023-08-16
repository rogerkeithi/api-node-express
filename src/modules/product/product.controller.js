import express from "express";
import listProducts from "./useCases/listProducts.js";
import updateProduct from "./useCases/updateProduct.js";
import deleteProduct from "./useCases/deleteProduct.js";
import createProduct from "./useCases/createProduct.js";

const productController = express.Router();

productController.post('/', createProduct)

productController.delete('/', deleteProduct)

productController.put('/', updateProduct)

productController.get('/', listProducts)

export default productController;
