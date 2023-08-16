import User from "../model/user.model.js";

const listUsers =  async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  }

export default listUsers