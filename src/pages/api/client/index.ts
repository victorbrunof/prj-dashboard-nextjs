import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../../models/Client';
import { dbConnection } from '../../../services/dbConnection';

dbConnection();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const clients = await Client.find({});
        res.status(200).json({ sucess: true, data: clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case 'POST':
      try {
        const { name, email, phone, cpf } = req.body;
        if (!name || !email || !phone || !cpf) throw new Error('Missing data');
        const client = await Client.create({ name, email, phone, cpf });
        res.status(201).json({ msg: 'Cadastrado com sucesso', data: client });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao cadastrar', error });
      }
      break;

    case 'PUT':
      try {
        const { _id, name, email, phone, cpf } = req.body;

        if (!name || !email || !phone || !cpf) throw new Error('Missing data');
        const client = await Client.updateOne(
          { _id },
          { name, email, phone, cpf }
        );
        res.status(200).json({ msg: 'Atualizado com sucesso', data: client });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao atualizar', error });
      }
      break;

    case 'DELETE':
      try {
        const { _id } = req.query;
        const client = await Client.deleteOne({ _id });
        res.status(200).json({ msg: 'Deletado com sucesso' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao deletar', error });
      }
      break;
  }
}
