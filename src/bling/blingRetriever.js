import axios from 'axios'
import { BLING_KEY, BLING_URL_GET } from './blingHelper.js'


export const blingRetriever = {
    allLeads:  async () => {
        try {
            let dataRetrieved = await axios.get(BLING_URL_GET + BLING_KEY)
            
            let uniqueData = dataRetrieved.data.retorno.pedidos
            // uniqueData.forEach(async pedido =>{
            //     console.log(pedido.pedido.data, pedido.pedido.cliente.nome, pedido.pedido.numero, pedido.pedido.totalvenda)
            // })
            return uniqueData    
        } catch (error) {
            console.log(error)
        }
        
        
    }
    
}