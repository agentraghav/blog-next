import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../helpers/db-util';

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    const { author, title, content, feature } = req.body;

    if (!author || author.trim() === '' || !title || title.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

    const newBlog = {
      author,
      title,
      content,
      feature,
    };

    let result;

    try {
      result = await insertDocument(client, 'blog', newBlog);
      newBlog._id = result.insertedId;
      res.status(201).json({ message: 'Added Blog.', blog: newBlog });
    } catch (error) {
      res.status(500).json({ message: 'Inserting Blog failed!' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      const db = client.db();
      const result = await db.collection('blog').deleteOne(id);
      res.status(201).json({ message: 'Deleted Blog.' });
    } catch (error) {
      res.status(500).json({ message: 'Deletion of Blog failed!' });
    }
  } else {
    const data = await getAllDocuments(client, 'blog', { _id: -1 });
    res.status(200).json({ data: data });
  }
  client.close();
}

export default handler;
