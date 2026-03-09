const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.send("KEON GAME SERVER ONLINE")
})

app.listen(3000,()=>{
console.log("SERVER RUNNING PORT 3000")
})
