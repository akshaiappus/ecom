const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',(req,res) => {
 res.send(`
 <form method="POST"> 
  <input name="email" placeholder="email" /> <br>
  <input name="password" placeholder="password" /><br>
  <input name="confirmPassword" placeholder="confirm password" /><br>
  <button > submit </button>
  </form>
 `);
});

app.post('/',(req,res) => {
  
        console.log(req.body);
    res.send("account created");
});
app.listen(3000,() =>{
    console.log('listening');
});