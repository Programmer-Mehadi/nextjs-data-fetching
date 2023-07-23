
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://post_user:I7ceu6L12hQJpW53@cluster0.8nrjrgb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log('Database Connected!')
    const db = await client.db("post-database");
    const postCollection = await db.collection("posts");
    // single post get

    if (req.method === 'GET') {
      const result = await postCollection.findOne({ id: Number(req.query.id) });
      res.send({
        data: result
      })
    }

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
