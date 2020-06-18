const connection = require('../database/connection')
const crypto = require('crypto')
exports.index = ('/ongs', async (req,res) =>{
  const ongs = await connection('ongs').select('*');
  return res.json(ongs)
})

 exports.create = ('/ongs', async (req,res) =>{
  const { name , email, whatsapp, city, uf} = req.body;

  const id = crypto.randomBytes(3).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return res.json({id});
})
