import mongoose from 'mongoose'

const { Schema } = mongoose

const SellSchema = new Schema ({
    number: {type: Number},
    valorVenda: {type: Number},
    cliente: {type: String},
    data: {type: Date}
    
})

export const sellsDb = mongoose.model('sellsDb', SellSchema)

