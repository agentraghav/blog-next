import { connectDatabase, getAllDocuments } from '../../helpers/db-util';
import BlogList from '../../components/blog/blog-list';
function Index(props) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: '600' }}>All Blogs</h2>
      <div>
        <BlogList items={props.blogs} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();
  const data = await getAllDocuments(client, 'blog', { _id: -1 });
  client.close();
  return {
    props: {
      blogs: JSON.stringify(data),
    },
  };
}

export default Index;
