import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player'
import { useRouter } from 'next/router'
import axios from 'axios'

const Index = () => {

  const [featuredItem, setFeaturedItem] = useState([])
  const router = useRouter()

  useEffect(() => {
    const [red, green, blue] = [253, 106, 2]
    const section1 = document.querySelector('.section1')
    window.addEventListener('scroll', () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y
      const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
      section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  }, [])


  useEffect(() => {
    if (router.isReady) {
      const _id = router.query._id
      getFeaturedItem()
    //   console.log(router.query)
    }
  }, [router.isReady])


  const getFeaturedItem = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/featured-work`,
      )

      const getF_data = data.data.get_featured_work

      setFeaturedItem(getF_data)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <Header />

  <section className="homebannnerk revealer">
    {/*<img src="./images/bannerhome.jpg" class="desktopayout img-fluid"> */}
    <video id="vid" playsInline="playsinline" preload="auto" autoPlay="autoplay" muted="muted" loop="loop" className="videoadaptsdesktop">
      <source src="https://uploads-ssl.webflow.com/636e26ef14867fb6ba3be3a6/636e26ef14867fc0aa3be431_Supari_Loop%20291021-transcode.mp4" type="video/mp4" />
    </video>
    {/*<img src="./images/mobbanner.jpg" class="mobstopayout img-fluid">*/}
  </section>
  <section className="whowres whtxt d-flex section1">
    <div className="container align-self-center">
      <div className="row">
        <div className="col-md-4 text-center position-relative">
          <h2 className="mnsub">Who are <span className="strsp">we?</span></h2>
          <div className="movablelines" />
        </div>
        <div className="col-md-8 mwd-tx">
          <p>Dedicated in creating <span>quality content,</span><br />
            SW Studios fuses emotions with brand and<br />
            product stories to create timeless assets.</p>
          <p>We're <span>young, full of energy,</span> and <span>passionate</span><br />
            about what we do</p>
        </div>
      </div>
    </div>
  </section>

  <section className="latestwrk pd-thm pd-topm">
    <div className="container">
      <div className="mainhd text-center">
        <h4 className="cntheads"><span>Our </span> latest work</h4>
      </div>
    </div>	

    {featuredItem &&
                  featuredItem.map((featuredItm, key) => (
  
    <div className="vdo-sects">
      <div className="container">
        <div className="row">
          <div className="col-md-6 vdopls">
          <HoverVideoPlayer
           videoSrc={
            `${process.env.NEXT_PUBLIC_B_API}work/videos/short-video/` +
            featuredItm.short_video
          }                    
          loadingStateTimeout={1000}
                    pausedOverlay={
                      <img
                        src={
                            `${process.env.NEXT_PUBLIC_B_API}work/images/thumbnail/` +
                            featuredItm.thumbnail
                          }          
                        className="vdtms"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">Loading...</div>
                    }
                    restartOnPaused
                    preload="metadata"
                  />
          </div>
          <div className="col-md-6">
            <h5>{featuredItm.name}</h5>
            <p>{featuredItm.short_desc}</p>
                <Link href="#">
                Read More</Link>
          </div>
        </div>
      </div>
    </div>

    ))}
   

    <div className="morevdo">
      <div className="container">

      <Link href="/work"  className="mnsub">
        View more <span className="strsp"> work </span> <img src="./images/mrarr.png" /></Link>
      </div>
    </div>
  </section>

  <section className="mprojs whowres whtxt">
    <div className="container align-self-center">
      <div className="mainhd text-center">
        <h4 className="cntheads"><span>Photoshoot </span> projects</h4>
      </div>
      <div className="whygridsphn owl-carousel owl-theme">
        <div className="item">
          <a href="#">
            <img src="./images/ourworkthmbs/photoshoot1.jpg" />
            <div className="bdorg" />
            <h6>Twenty Dresses</h6>
            <p>We did this shoot as an extension of the
              video campaign we shot. We adapted the
              same tonality and messaging in these
              quirky stills</p>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="./images/ourworkthmbs/photoshoot2.jpg" />
            <div className="bdorg" />
            <h6>Twenty Dresses</h6>
            <p>We did this shoot as an extension of the
              video campaign we shot. We adapted the
              same tonality and messaging in these
              quirky stills</p>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="./images/ourworkthmbs/photoshoot3.jpg" />
            <div className="bdorg" />
            <h6>Twenty Dresses</h6>
            <p>We did this shoot as an extension of the
              video campaign we shot. We adapted the
              same tonality and messaging in these
              quirky stills</p>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="./images/ourworkthmbs/photoshoot4.jpg" />
            <div className="bdorg" />
            <h6>Twenty Dresses</h6>
            <p>We did this shoot as an extension of the
              video campaign we shot. We adapted the
              same tonality and messaging in these
              quirky stills</p>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="./images/ourworkthmbs/photoshoot5.jpg" />
            <div className="bdorg" />
            <h6>Twenty Dresses</h6>
            <p>We did this shoot as an extension of the
              video campaign we shot. We adapted the
              same tonality and messaging in these
              quirky stills</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="pd-thm workbrn pd-topm">
    <div className="container">
      <div className="mainhd text-center">
        <h4 className="cntheads"><span>Brands </span> we work with</h4>
      </div>
      {/*<div class="brandssld">
			<img src="./images/brandsslate.jpg" class="img-fluid">
		</div>*/}
      <div className="brandssld">
        <div className="row">
          <div className="col-md-2 col-4">
            <img src="./images/swclients/1.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/2.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/3.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/18.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/4.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/6.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/5.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/7.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/8.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/9.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/10.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/11.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/12.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/13.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/17.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/14.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/15.png" className="img-fluid" />
          </div>
          <div className="col-md-2 col-4">
            <img src="./images/swclients/16.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="lttalks pd-thm pd-topm">
    <div className="container align-self-center">
      <div className="mainhd text-center">
        <h4 className="cntheads"><span>Impressed? </span> Let’s talk!</h4>
      </div>
      <div className="mnformsty">
        <form>
          <div className="form-group  row">
            <div className="col-md-2">
              <label><b>Hello, my name is</b></label>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <label><b>I’m looking for</b></label>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <label><b>and I represent</b></label>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <label><b>you can contact me on</b></label>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <label><b>or drop a mail at</b></label>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-12 text-center">
              <button className="ytthemects">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
    
      <Footer />
    </>
  )
}

export default Index
