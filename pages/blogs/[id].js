import { connectDatabase, getAllDocuments } from '../../helpers/db-util';

function BlogPage(props) {
  const { item } = props;
  return (
    <div>
      <h2>{item.title}</h2>
      <div>
        <p>{item.content}</p>
      </div>
      <div>{item.author}</div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const client = await connectDatabase();
  const data = await getAllDocuments(client, 'blog', { _id: -1 });
  const selectedData = data.find((blog) => blog._id === params.id);
  client.close();
  return {
    props: {
      item: selectedData,
    },
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();
  const data = await getAllDocuments(client, 'blog', { _id: -1 });
  console.log(data);
  client.close();

  const paths = data.map((item) => ({ params: { id: item._id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default BlogPage;
