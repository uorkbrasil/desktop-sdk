
import axios from "axios";
const apikey = "YOUR_UORK_API_KEY";
const url = `https://uork.org/search/status/check-account.php?apikey=${apikey}&id=`;
import express from "express";
const app = express()
const port = 3000
async function fullInfo(email: string){
   try {
 const response = await axios.get(url + email)
 console.log(response.data);
   } catch (error){
      console.error('1 or more error found')
   }
   
 } 

 async function webFullInfo(email: string){
   try {
       const response = await axios.get(url + email)
       
       app.get('/fullUserInfo', (req: any, res: any) => {
         res.send(`<h1>Informations of ${response.data.nome}</h1><br><p>Verified: ${response.data.verificado}</p><br><p>Phone: ${response.data.telefone}</p><br><p>UorkV: ${response.data.uorkv}</p><br><p>ID: ${response.data.id}</p><img src='${response.data.urlfotoperfil}' width='50'></img>`)
       })
       app.listen(port, () => {
         console.log(`Your webserver successfully opened in http://localhost:${port}/fullUserInfo`)
       })

   } catch (error){
      console.error('1 or more errors found')
   }
 }



export default {
   fullInfo,
   webFullInfo
}