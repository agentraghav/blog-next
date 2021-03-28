import classes from './blog.module.css';
import Router from 'next/router';
function Blog(props) {
  const { title, author, content, id } = props;

  const submitHandler = (e) => {
    Router.push(`/blogs/${id}`);
  };

  const deletePost = (e) => {
    const blogData = { id };
    fetch('/api/blog', {
      method: 'DELETE',
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Router.push('/');
      });
  };

  return (
    <div key={id} className={classes.blogcontainer}>
      <div>
        <h2 className={classes.titl}>{title}</h2>
        <div>
          <p className={classes.data}>{content}</p>
        </div>
        <div>
          <p className={classes.auth}>{author}</p>
        </div>
      </div>
      <button
        type='button'
        onClick={submitHandler}
        className='btn btn-secondary'>
        Explore Blog
      </button>
      <i
        style={{ marginLeft: '600px', cursor: 'pointer' }}
        className='fa fa-trash fa-lg'
        onClick={deletePost}
        aria-hidden='true'></i>
    </div>
  );
}

export default Blog;
