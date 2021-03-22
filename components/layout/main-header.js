import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link href='/'>
              <span className='navbar-brand'>Blog</span>
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            <li>
              <Link href='/blogs'>All Blogs</Link>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link href='/create'>Create Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
