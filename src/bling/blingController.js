import axios from 'axios'
import { BLING_KEY, BLING_XML, BLING_URL_POST } from './blingHelper.js'


export const blingController = {
    leadsOn: async  ( infos ) => {
        // return infos
        try {
           
            infos.forEach(async info => {
                // console.log(info)
                const data = BLING_XML(info)
                // console.log(data)
                const leads = await axios.post(BLING_URL_POST + BLING_KEY + '&xml=' + data)    
                console.log(leads.data)
                
            })
            
            
        } catch (error) {
            console.log(error)
        }
    
},

    saveSale: async data => {

        data.map(pedido =>{
            console.log(pedido.pedido.numero, pedido.pedido.cliente.nome, pedido.pedido.data, pedido.pedido.totalvenda)
        })
    }


}




