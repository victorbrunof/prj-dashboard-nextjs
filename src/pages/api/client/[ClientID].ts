import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../../models/Client';
import { dbConnection } from '../../../services/dbConnection';

dbConnection();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { ClientID } = req.query;

  switch (method) {
    case 'PUT':
      try {
        const { name, email, phone, cpf } = req.body;
        if (!name || !email || !phone || !cpf) throw new Error('Missing data');
        const client = await Client.updateOne(
          { _id: ClientID },
          { name, email, phone, cpf }
        );
        res.status(200).json({ sucess: true, data: client });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case 'DELETE':
      try {
        const client = await Client.deleteOne({ _id: ClientID });
        res.status(200).json({ sucess: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
  }
}
