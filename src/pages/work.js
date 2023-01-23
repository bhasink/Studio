import Link from 'next/link'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player';

const Work = () => {
  return (

    <>
    <Header/>

<section className="workshopareas">
  <div className="container">
    <div className="tabnormcta">
      <button className="btn-group btn-group-toggle active">Production </button>
      <button className="btn-group btn-group-toggle">Short videos</button>
      <button className="btn-group btn-group-toggle">Animation</button>
      <button className="btn-group btn-group-toggle">Photoshoot</button>
    </div>
    <div className="courseallpnsd vdo-sects">
      <div className="row">
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam2.jpg" className="img-fluid" />
          <h5>Twenty Dresses ft. Alaya F</h5>
          <p>We use the elevator as a relatable common place to create a
            vibrant series ft. Alaya F and flex Nykaa’s 20 Dresses
            in this upbeat video series.</p>
          <a href="#">Read More</a>
        </div>
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam3.jpg" className="img-fluid" />
          <h5>Wavin Vectus</h5>
          <p>We drive the brand’s narrative of replacing ‘water tank’ with ‘Vectus’ in the minds of our consumers for timeless impact in the buying behavior.</p>
          <a href="#">Read More</a>
        </div>
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam4.jpg" className="img-fluid" />
          <h5>Wooden Street</h5>
          <p>We created a series of three extremely fun, quirky and relatable videos ft. Aparshakti Khurana to drive the brand philosophy using characters from a middle-class Indian household.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    <div className="courseallpnsd vdo-sects">
      <div className="row">
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam5.jpg" className="img-fluid" />
          <h5>Magik</h5>
          <p>We celebrated the onboarding of Sourav Ganguly as a brand ambassador for Magik while highlighting he super-smart lighting products in a cricketing theme.</p>
          <a href="#">Read More</a>
        </div>
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam1.jpg" className="img-fluid" />
          <h5>Wavin Vectus</h5>
          <p>We drive the brand’s narrative of replacing ‘water tank’ with ‘Vectus’ in the minds of our consumers for timeless impact in the buying behavior.</p>
          <a href="#">Read More</a>
        </div>
        <div className="col-md-4">
          <img src="./images/ourworkthmbs/videosam6.jpg" className="img-fluid" />
          <h5>Wooden Street</h5>
          <p>We created a series of three extremely fun, quirky and relatable videos ft. Aparshakti Khurana to drive the brand philosophy using characters from a middle-class Indian household.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>


    <Footer/>
    </>
  )
}

export default Work
