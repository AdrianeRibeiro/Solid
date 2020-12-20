import express from 'express'
import MongoHelper from './mongo-helper'
//import { MongoHelper } from './mongo-helper' -> considerando linguagem fortemente tipada
const app = express()

app.post('/', async (req, res) => {
  const userModel = await MongoHelper.getCollection('users')
  //const userModel = await MongoHelper.instance.getCollection('users') -> considerando linguagem fortemente tipada
  await userModel.insertOne({ name: 'Adriane' })
  res.send('Usuário Criado')
})

app.get('/', async (req, res) => {
  const userModel = await MongoHelper.getCollection('users')
  //const userModel = await MongoHelper.instance.getCollection('users') -> considerando linguagem fortemente tipada
  const users = await userModel.find().toArray()
  res.send({ users })
})

app.listen(5050, () => console.log("server running"))
