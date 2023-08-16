import express from 'express'
import { API_PORT, API_URL } from './config/config.js'
import logger from './middlewares/logger.js'
import bodyParser from 'body-parser'
import userController from './modules/user/user.controller.js'
import productController from './modules/product/product.controller.js'
import testDbConnection from './config/database/datasource.js'

const api = express()

api.use(logger)

api.use(bodyParser.json())

testDbConnection();

api.use('/user', userController)

api.use('/product', productController)

api.use('/', (req, res) => {
  res.status(200).send('Bem-vindo à API!')
})

api.all('*',(req, res) => {
  res.status(404).send('Voce esta perdido?')
})

api.listen(API_PORT, () => {
    console.log('Servidor rodando na porta 3000.' + API_URL + API_PORT )
})
