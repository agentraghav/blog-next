import { Fragment } from 'react';
import BlogList from '../components/blog/blog-list';
import { connectDatabase, getAllDocuments } from '../helpers/db-util';
function HomePage(props) {
  return (
    <Fragment>
      <h1 className='feature-center'>Featured Blogs</h1>
      <div>
        <BlogList items={props.items} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();
  const data = await getAllDocuments(client, 'blog', { _id: -1 });
  const filteredData = data.filter((blog) => blog.feature);
  client.close();
  return {
    props: {
      items: JSON.stringify(filteredData),
    },
  };
}

export default HomePage;
