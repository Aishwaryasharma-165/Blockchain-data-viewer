import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port =3000; 

const Url="https://api.blockchain.com/v3/exchange";

//Comment the below line before running this project.
const apiKey=process.env.apiKey;

//uncomment the below line and add your Api key.
//const apiKey="YOUR_API_KEY";

const config = {
  headers: { Cookie: `auth_token={apiKey}` }
};
const symbol="BTC-USD";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req ,res) => {
res.render("index.ejs");
});

app.post('/tickers',async (req ,res) => {
    try{
        const result= await axios.get(Url+`/tickers/${symbol}`,config);
        res.render("index.ejs",{content : result.data ,type : "price"});
    }
   catch(error){
    res.render("index.ejs",{error: "No data found"});
   }
});

app.post('/symbols',async (req ,res) => {
    try{
        const result= await axios.get(Url+`/symbols/${symbol}`,config)
        res.render("index.ejs",{content : result.data ,type : "symbol"});
    }
   catch(error){
    res.render("index.ejs",{error: "No data found"})
   }
});

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
});