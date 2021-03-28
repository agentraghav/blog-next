import { Fragment } from 'react';
import Head from 'next/head';
import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <script
          src='https://kit.fontawesome.com/a076d05399.js'
          crossorigin='anonymous'></script>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
        />
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>

        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
