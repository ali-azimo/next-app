import mongoose from "mongoose";


let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

  if (initialized) {
    console.log("Conectado no MongoDB");
    return;
  }

  try {
    await mongoose.connect(!process.env.MONGODB_URI, {
      dbName: 'Comercio-moz',
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    initialized = true;
    console.log(`MongoDB conetado com sucesso`);
  } catch (err) {
    console.log(`Erro ao conectar no MongoDB: ${err}`);
  }
};