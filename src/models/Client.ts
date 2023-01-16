import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  cpf: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Client =
  mongoose.models.Client || mongoose.model('Client', ClientSchema);
