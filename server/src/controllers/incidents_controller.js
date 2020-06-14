const connection = require('../database/connection');

exports.index = async (req,res) =>{
  const incidents = await connection('incidents').select('*');
  return res.json(incidents)
}

exports.create = async (req,res) =>{
  const { title, description, value} = req.body;

  const ong_id = req.headers.authorization;

  const [id] = await connection ('incidents').insert({
    title,
    description,
    value,
    ong_id
  })

  return res.json({id});
}