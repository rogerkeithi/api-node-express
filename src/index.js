import express from 'express'
import { API_PORT, API_URL } from './config/config.js'
import userRouter from './router/user.route.js'
import productsRouter from './router/products.route.js'
import logger from './middlewares/logger.js'
import bodyParser from 'body-parser'

const api = express()

api.use(logger);
api.use(bodyParser.json());

api.use('/user', userRouter);

api.use('/product', productsRouter )

api.all('*',(req, res) => {
  res.status(404).send('Voce esta perdido?');
})

api.listen(API_PORT, () => {
    console.log('Servidor rodando na porta 3000.' + API_URL + API_PORT )
})
