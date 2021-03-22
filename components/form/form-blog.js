import Router from 'next/router';
import { Fragment, useState } from 'react';

function FormBlog() {
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [feature, setFeature] = useState(false);
  const [isInvalid, setisInvalid] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    if (title.trim() === '' || content.trim() === '' || author.trim === '') {
      setisInvalid(true);
      return;
    }
    setisInvalid(false);

    const blogData = {
      author,
      title,
      content,
      feature,
    };

    fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(blogData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Router.push('/');
      });
  }

  return (
    <Fragment>
      <div className='container'>
        {isInvalid && (
          <div className='alert alert-danger' role='alert'>
            Please Enter Valid Details
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label for='author'>Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type='text'
              className='form-control'
              id='author'
              placeholder='Author Name'
            />
          </div>
          <div className='form-group'>
            <label for='title'>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='form-control'
              id='title'
              placeholder='Enter Title'
            />
          </div>
          <div className='form-group'>
            <label for='description'>Blog Content</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className='form-control'
              id='description'
              row='8'></textarea>
          </div>
          <div className='form-group form-check'>
            <input
              onChange={() => setFeature(!feature)}
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' for='exampleCheck1'>
              Feature This
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default FormBlog;
