import User from "../model/user.model.js";

const createUser = (req, res) => {

    const newUser = User.create(req.body);

    res.json({
        message: 'Usuário criado com sucesso!',
        data: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
        }
    });
}
export default createUser 