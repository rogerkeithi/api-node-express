import { PrismaClient } from '@prisma/client'
import uuidGen from '../../utils/uuidGen.js';

const prisma = new PrismaClient()

export const createUser = async (req, res) => {
    const newUser = req.body;
    try{
        await prisma.user.create({
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

export const deleteUser =  async (req, res) => {
    const body = req.body;
    try{
        await prisma.user.delete({
            where:{
                id: body.id,
            }
        })
        res.json({message: 'User deleted successfuly!'});
    }catch(e){
        throw e;
    }
}

export const listAllUsers =  async (req, res) => {
    const users = await prisma.user.findMany();

    res.json(users);
}

export const getUser = async (req, res) => {
    const body = req.body;

    try{
        const user = await prisma.user.findUnique({
        where: {
          id: body.id,
        },
        select: {
          email: true,
          firstName: true,
          lastName: true,
        },
      })

      if(!user)
        res.json({message: 'User not found'})

      res.json(user);
    }catch(e){
        throw e;
    }
}

export const updateUser =  async (req, res) => {
    const body = req.body;

    try{
        await prisma.user.update({
            where:{
                id: body.id,
            },
            data:{
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
            }
        })
        res.json({message: 'User deleted successfuly!'});
    }catch(e){
        throw e;
    }
}