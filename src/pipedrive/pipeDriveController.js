import axios from 'axios'
import * as consts from './pipeDriveHelper.js'

let input = []
input['status'] = 'Won'

export default {
    getWon: async (req, res) => {
        try {  
            
            const user = await axios.get(`${consts.PIPE_URL}${consts.PIPE_KEY}`)
            const sucessDeals = user.data.data.map((data) => {

                return {
                    id: data.id,
                    nPedidos: 10,
                    dataCompra: data.won_time.substring(0, 10),
                    fornecedor: data.org_name,
                    descricaoItem: 'some description',
                    quantidadeItem: 5,
                    numeroDias: '01/01/2020',
                    valor: data.weighted_value,
                    formaPagamento: 'dinheiro'
                }
            })
            return sucessDeals
            

        } catch (error) {
            console.log(error)
        }
    }
}




