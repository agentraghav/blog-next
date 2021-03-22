import { Fragment, useEffect } from 'react';
import Blog from './blog';
function BlogList(props) {
  const { items } = props;
  const data = JSON.parse(items);
  useEffect(() => {
    console.log(items);
  });
  return (
    <Fragment>
      {data.map((item) => (
        <Blog
          key={item._id}
          id={item._id}
          title={item.title}
          content={item.content}
          author={item.author}
        />
      ))}
    </Fragment>
  );
}

export default BlogList;
