import { MongoClient } from 'mongodb';

async function handler(req, res) {
  // POST /api/new-coral
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rfxjl3d.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const coralsCollection = db.collection('corals');

    const result = await coralsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: 'coral inserted' });
  }
}

export default handler;
