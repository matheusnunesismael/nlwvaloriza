import express from "express";
const app = express();


app.listen(3000, () => console.log("Server tá on"));


app.get("/teste", (request, response)=>{
    return response.send("Teste NLW");
})