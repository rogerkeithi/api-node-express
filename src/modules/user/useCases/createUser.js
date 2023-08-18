import { PrismaClient } from '@prisma/client'
import uuidGen from '../../../utils/uuidGen.js';

const prisma = new PrismaClient()
const createUser = async (req, res) => {
    const newUser = req.body;
    try{
        const createdUser = await prisma.user.create({
            data: {
              id: uuidGen,
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              email: newUser.email,
            },
          })
        res.json({message: 'User created successfuly!'});
    }catch(e){
        throw e;
    }

}
export default createUser 