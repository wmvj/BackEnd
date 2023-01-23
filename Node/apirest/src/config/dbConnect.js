import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://warley:wmvj@cluster0.wcd17cl.mongodb.net/webII-node')

let db = mongoose.connection

export default db