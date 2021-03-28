import { connectDatabase, getAllDocuments } from '../../helpers/db-util';

function BlogPage(props) {
  const { item } = props;
  const data = JSON.parse(item);
  return (
    <div style={{ marginTop: '50px', padding: '20px', borderColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontWeight: '600', marginTop: '30px' }}>
        {data.title}
      </h2>
      <div>
        <p
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: '28px',
            marginTop: '30px',
          }}>
          {data.content}
        </p>
      </div>
      <div>
        <p
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: '28px',
            marginTop: '30px',
          }}>
          {' '}
          {data.author}
        </p>{' '}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const client = await connectDatabase();
  const data = await getAllDocuments(client, 'blog', { _id: -1 });

  const selectedData = data.find(
    (blog) => blog._id.toString() === params.id.toString()
  );
  console.log(selectedData);
  client.close();
  return {
    props: {
      item: JSON.stringify(selectedData),
    },
  };
}

export default BlogPage;
