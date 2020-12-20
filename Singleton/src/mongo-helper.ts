import { Collection, MongoClient } from 'mongodb'
import env from './env'

//no node export default já é um singleton
export default {
  client: null as MongoClient,

  async connect(): Promise<void>{
    console.log(env.mongoUrl)
    this.client = await MongoClient.connect(env.mongoUrl)
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect()
    }
    return this.client.db().collection(name)
  }
}

//singleton numa linguagem fortemente tipada: não tem construtor
// export class MongoHelper {
//   private client: MongoClient = null
//   private static _instance: MongoHelper

//   private constructor() { }
  
//   static get instance(): MongoHelper {
//     if (!MongoHelper._instance) {
//       //posso intanciar somente dentro da classe
//       MongoHelper._instance = new MongoHelper()
//     }
//     return MongoHelper._instance
//   }

//   async connect(): Promise<void>{
//     this.client = await MongoClient.connect(env.mongoUrl)
//   }

//   async getCollection (name: string): Promise<Collection> {
//     if (!this.client?.isConnected()) {
//       await this.connect()
//     }
//     return this.client.db().collection(name)
//   }
// }