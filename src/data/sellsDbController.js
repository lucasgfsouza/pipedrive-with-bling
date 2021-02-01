import { sellsDb } from './sellsDb.model.js'
import { blingRetriever } from '../bling/blingRetriever.js'




export const infos = {
    
    getInfos: async (res) => {
        try {
           
        const data = await blingRetriever.allLeads()
        await data.forEach(pedido => {
            const SellSchema = new sellsDb({
                number: pedido.pedido.numero,
                valorVenda: pedido.pedido.totalvenda,
                cliente: pedido.pedido.cliente.nome,
                data: pedido.pedido.data
            })
            SellSchema.save()
            console.log('pedido salvo')}) 
             
        } catch (error) {
            console.log(error)
        }   
    },

    groupInfos: async (req, res) => {
        
        const db = sellsDb
        const db1 = await db.aggregate([
            {
                $group:
                {
                  _id: { $dateToString: { format: "%Y-%m-%d", date: "$data" }},
                  valorVenda: { $sum: '$valorVenda' },
                  count: { $sum: 1 },
                },
              },
              { $sort: { count: 1 } }
            ])
        console.log(db1)
        return db1       
}}

