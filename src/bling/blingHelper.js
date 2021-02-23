import xml2js from 'xml2js'

export const BLING_KEY = ''
export const BLING_URL_POST = 'https://bling.com.br/Api/v2/pedido/?apikey='
export const BLING_URL_GET = 'https://bling.com.br/Api/v2/pedidos/json/?apikey='

export const BLING_XML = function (infos) {
    
    
    const { nPedido, dataCompra, fornecedor, descricaoItem, quantidadeItem, numeroDias, valor } = infos
    
    
    let xml = {
            pedido: {
                data: dataCompra,
                numero: nPedido,
                cliente: {
                nome: fornecedor,
                tipoPessoa: 'J',
                endereco: 'Avenida das Americas',
                cpf_cnpj: 'official_document',
                ie_rg: '55417841',
                numero: '100',
                complemento: 'Fundos',
                bairro: 'Centro',
                cep: '19160-000',
                cidade: 'Presidente Prudente',
                uf: 'SP',
                fone: '18991202653',
                email: 'meuemail@aqui.com.br',
            },
            transporte: {
                transportadora: 'teste',
                tipo_frete: 'D',
                servico_correios: 'SEDEX',
                dados_etiqueta: {
                    nome: 'Sr Gourmet',
                    endereco: 'Avenida das Americas',
                    numero: '100',
                    complemento: 'fundos',
                    municipio: 'Presidente Prudente',
                    uf: 'SP',
                    cep: '19160-000',
                    bairro: 'Centro',
            },
            volumes: {
                volumes: [
                {
                    servico: 'SEDEX - CONTRATO',
                    codigoRastreamento: '',
                },
                ],
            },
            },
            itens: {
            item: [
                {
                codigo: '01',
                descricao: descricaoItem,
                un: 'un',
                qtde: quantidadeItem,
                vlr_unit: valor,
                },
                
            ],
            },
            parcelas: {
                parcela: [
                {
                    data: numeroDias,
                    vlr: valor,
                    obs: 'Teste obs 1',
                },

            ],
            },
            vlr_frete: '5',
            vlr_desconto: '10',
            obs: 'apenas uma anotação',
            obs_internas: 'Boraaa venderrrrr',
        },
        }
    
    var builder = new xml2js.Builder()
       
    const xml2 = builder.buildObject(xml)
        
    return encodeURI(xml2)
}
    

    


