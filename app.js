const http=require('http');
const exp=require('express');
const parser=require('body-parser');
const request=require('request');

const app=exp();

const urlencodedParser = parser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render("home");
});

app.post('/', urlencodedParser, (req,res)=>{

  console.log(req.body.City);

  request({
    headers:{'content-type':"application/json"},
    url:"http://api.openweathermap.org/data/2.5/weather?q="+req.body.City+"&appid=201320f6eabcb805d679c66df6a4d778",
    json:true
  },(error,response,body)=>{

    res.render('show_weather',{data:body});
    console.log(body);
  })

});

app.listen(3000,'127.0.0.1');
