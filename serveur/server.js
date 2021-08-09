const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("./db/user"); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(cors())

 app.get('/test', (req, res) => {
  res.status(200).json({sucess:true});
});

app.post("/user" , async (req,res) =>{
    const results = await db.createUser(req.body);
    res.status(201).json({id: results[0] });
});
app.get("/user/:id" , async (req,res) =>{
    const user = await db.getUserById(req.params.id);
    res.status(200).json({user });
});

app.get("/user" , async (req,res) =>{
    const users = await db.getAllUser();
    res.status(200).json({users });
});

app.put("/user/:id", async(req,res) =>{
    const id = await db.updateUser(req.params.id, req.body);
    res.status(200).json({id });
});
app.delete("/user/:id", async(req,res) =>{
     await db.deleteUser(req.params.id);
    res.status(200).json({success: true });
});  



const PORT = 22000

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})