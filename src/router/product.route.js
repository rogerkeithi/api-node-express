import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
    const {name, category, description, available} = req.body;
    res.json({
        message: 'Produto criado com sucesso!',
        data: {
            name: name,
            category: category,
            description: description,
            available: available,
        }
    });
})

router.delete('/', (req, res) => {
    res.json({message: 'Produto deletado com sucesso!'});
})

router.put('/', (req, res) => {
    res.json({message: 'Produto atualizado com sucesso!'});
})

router.get('/', (req, res) => {
  const products = [
    {id: 1, name: 'Xarope'},
    {id: 2, name: 'Própolis'},
    {id: 3, name: 'Pastilha pra tosse'},
  ]
  res.json(products);
})

export default router;
