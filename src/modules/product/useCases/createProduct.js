const createProduct = (req, res) => {
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
}
export default createProduct