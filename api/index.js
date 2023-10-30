import express from 'express';

import apiroutes from "./api_routes,js";

const listen_port = 3005

const app = express()

 app.use("/",apiroutes);

app.listen(listen_port, () => { 
  console.log('Example app listening on port ${listen_Port}')
 })