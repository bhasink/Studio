import Image from 'next/image'

const Header = () => {

    return (
    <header className="site-header topmain mobexheight norm norm heightexp">
  <nav className="navbar navbar-expand-lg navbar-light">    
    <div className="container">
      {/* Brand */}
      <a className="navbar-brand" href="./">

      {/* <Image
          className="navbar-brand-img"
          src="/images/logo.svg"
          alt="Logo"
          width={180}
          height={37}
          priority
        /> */}

{/* <Image
          className="navbar-brand-img themeblackonly"
          src="/images/logoblack.svg"
          alt="Logo"
          width={180}
          height={37}
          priority
        /> */}


        <img src="./images/logo.svg" className="navbar-brand-img" alt="logo" />
        <img src="./images/logoblack.svg" className="navbar-brand-img themeblackonly" alt="logo" />
      </a>
      {/* Collapse */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="menufull">
          {/* Navigation */}
          <ul className="navbar-nav ml-auto  position-relative" id="menu-center">
            <li className="nav-item  active">
              <a className="nav-link" href="services.html">Home
              </a>
            </li>
            <li className="nav-item submno">
              <a className="nav-link" href="#">OUR WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Toggler */}
      <button className="navbar-toggler openhdas" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fal fa-bars" />
        <i className="fal fa-times" />
      </button>
    </div>
  </nav>
</header>

    )
  }
  
  export default Header