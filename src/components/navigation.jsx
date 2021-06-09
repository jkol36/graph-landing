import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link to='/home' className='navbar-brand page-scroll' >
            Graph
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/home#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='/home#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='/home#contact' className='page-scroll'>
                Get In Touch
              </a>
            </li>
            <li>
              <Link to='/apply' style={{
                backgroundColor: 'black', 
                borderColor: '#ddd',
                borderRadius: 3,

                color: 'white'}} 
                  href='#apply' 
                  className='page-scroll'>
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
