import express from 'express';

const app = express();

app.get("/",(req,res)=>{
res.json({ message: "hello",
    testing:"passed"
});
});

app.listen(3000,()=>{
console.log("Server is running on 3000");
});
