import { MongoClient } from 'mongodb'; 

// /api/new-meetup
// Only POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    //This runs somehow in the server, safety to write password
    const client = await MongoClient.connect('mongodb+srv://kizuyoko:packardbell1@cluster0.sgilcus.mongodb.net/meetups?retryWrites=true&w=majority'); 
    const db = client.db(); 
    
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Meetup inserted!'});
  }
}

export default handler;