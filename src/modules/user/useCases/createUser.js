const createUser = (req, res) => {
    const {name, age, email} = req.body;
    res.json({
        message: 'Usuário criado com sucesso!',
        data: {
            name: name,
            age: age,
            email: email
        }
    });
}
export default createUser 