const listProducts = (req, res) => {
    const products = [
      {id: 1, name: 'Xarope'},
      {id: 2, name: 'Própolis'},
      {id: 3, name: 'Pastilha pra tosse'},
    ]
    res.json(products);
  }
export default listProducts