import mongoose from 'mongoose';
const connection = {};

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

export async function dbConnection() {
  if (connection.isConnected) {
    return;
  }

  mongoose.set('strictQuery', true);
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterteste.887xj8f.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log('Conectamos ao MongoDB');
    })
    .catch((err) => console.log(err));

  //   const db = await mongoose.connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //   });

  //   connection.isConnected = db.connections[0].readyState;
}
