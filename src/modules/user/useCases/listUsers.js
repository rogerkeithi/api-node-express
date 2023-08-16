const listUsers =  (req, res) => {
    const users = [
      {id: 1, name: 'Giusepe Catorta'},
      {id: 2, name: 'Jalim Rabei'},
      {id: 3, name: 'Sujiro Kimi Mame'},
    ]
    res.json(users);
  }
export default listUsers