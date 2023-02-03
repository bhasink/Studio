import Image from 'next/image'
import { useState,useEffect } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
const Header = () => {


  useEffect(() => {
    var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       //âíèç
	   $('.topmain').addClass('scrolling_down');
	   $('.topmain').removeClass('scrolling_up');
   } else {
      // ââåðõ 
	   $('.topmain').addClass('scrolling_up');
	   $('.topmain').removeClass('scrolling_down');
   }
   lastScrollTop = st;
})

$(function() {
  var nav = $(".norm");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 50) {
          nav.removeClass('norm').addClass("navfixed");
      } else {
          nav.removeClass("navfixed").addClass('norm');
      }
  });
});
    
  }, [])

  const [isActive, setActive] = useState("false");
  const [isActivee, setActivee] = useState("");
  const router = useRouter()

  const handleToggle = () => {
    setActive(!isActive);
  };

    return (
    <header className={`site-header topmain mobexheight norm ${isActive ? "" : "heightexps"}`}>
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


        <img src="/images/logo.svg" className="navbar-brand-img" alt="logo" />
       {/*<img src="/images/logoblack.svg" className="navbar-brand-img" alt="logo" /> */} 
      </a>


      
      {/* Collapse */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="menufull">
          {/* Navigation */}
          <ul className="navbar-nav ml-auto  position-relative" id="menu-center">
            <li className="nav-item  active">
              <Link className="nav-link" href="/">Home
              </Link>
            </li>
            <li className="nav-item submno">
              <Link className="nav-link" href="/work">OUR WORK
              </Link>
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
      <button  onClick={handleToggle} className={`navbar-toggler openhdas ${isActive ? "" : "crossshwos"}`}  type="button" >
              <i className="fal fa-bars" />
              <i className="fal fa-times" />
            </button>
    </div>
  </nav>
</header>

    )
  }
  
  export default Header