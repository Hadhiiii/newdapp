import express from 'express';

const listen_port = 3005

const app = express()

app.listen(listen_port, () => { 
  console.log('Example app listening on port ${listen_port}')
})