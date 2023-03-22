import Link from 'next/link'

const Footer = () => {
    return (
<footer className="thmn-footer">
  <div className="desktop-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-6">
          <div className="row">
            <div className="col-md-4 col-12">
              <h3>About Us</h3>
              <ul>
                <li><a href="#about">About</a></li>
                {/*  <li><a href="#">Terms &amp; Privacy Policies</a></li>  */}
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <h3><Link href="/work">Work</Link></h3>
              
            </div>
            <div className="col-md-4 col-12">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/#clients">Clients</Link></li>
                <li><Link href="/#getintouch">Get in Touch</Link></li>
                
              </ul>
            </div>
            {/* <div className="col-md-5">
              <h3>Newsletter</h3>
              <p>Sign Up for updates and much more.</p>
              <div className="mnformsty">
                <form>
                  <div className="form-group  row">
                    <div className="col-md-12">
                      <label><b>Your Email</b></label>
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                      <button className="ytthemects">Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="footer-mail">
            <p className="locn">Delhi</p>
            <p>Red Brick Centre, 2nd Floor, Plot No,<br />
              258, Lane 3, Westend Marg, Saidulajab,<br />
              Saket, New Delhi, Delhi 110030</p>
          </div>
          <div className="footer-mail">
            <p className="locn">Mumbai</p>
            <p>603 The Co-working Space, 1F, 27 MIDC, Marol<br /> MIDC Industry Estate, Andheri East, Mumbai,<br /> Maharashtra 400047</p>
          </div>
        </div>
      </div>
    </div>
    <div className="copyrgts text-center text-lg-left">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="socials">
              <ul>
                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                <li><a href="#"><i className="fab fa-vimeo-v" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 text-center text-lg-right">
            <p className="leftsxts">Copyright © 2023. Business Entity: Sociowash. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
  }
  
  export default Footer