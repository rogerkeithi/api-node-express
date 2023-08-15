import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
    const {name, age, email} = req.body;
    res.json({
        message: 'Usuário criado com sucesso!',
        data: {
            name: name,
            age: age,
            email: email
        }
    });
})

router.delete('/', (req, res) => {
    res.json({message: 'Usuário deletado com sucesso!'});
})

router.put('/', (req, res) => {
    res.json({message: 'Usuário atualizado com sucesso!'});
})

router.get('/', (req, res) => {
  const users = [
    {id: 1, name: 'Giusepe Catorta'},
    {id: 2, name: 'Jalim Rabei'},
    {id: 3, name: 'Sujiro Kimi Mame'},
  ]
  res.json(users);
})

export default router;
