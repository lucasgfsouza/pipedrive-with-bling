import express, { response, urlencoded } from 'express'
import mongoose from 'mongoose'

import pipeDriveController from './src/pipedrive/pipeDriveController.js'
import { blingController } from './src/bling/blingController.js'
import { blingRetriever } from './src/bling/blingRetriever.js'
import { MONGO_CONN } from './src/data/dataHelper.js'
import { infos } from './src/data/sellsDbController.js'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(express.json())

const wons = await pipeDriveController.getWon()
const sales = await blingRetriever.allLeads()
async function resolveData(){
    
    await blingController.leadsOn(wons)
    await blingRetriever.allLeads()
}

console.log('server rodando')

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(MONGO_CONN, async () => {
    console.log('db on')
}) 



app.get('/pipetobling', async (req, res) => {
    await resolveData()
    res.send('finish')
})
app.get('/savedb', (req,res) => {
    infos.getInfos()
    res.send('pedidos salvos')
})
app.get('/relatorio', async (req, res) =>  {
    await infos.groupInfos()
    res.send('finish')
    
})


app.listen(8000)