import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import PolCaDot from '../assets/Polcadot.png'
import HeroSecimg1 from '../assets/Place Your Image.png'
import RAtingImg from '../assets/Star.png'
import GoodqPimg from '../assets/Place Your Image (1).png'
import HeroSecG1img from '../assets/Group 1.png'
import HeroSecG2img from '../assets/Group 2.png'
import HeroSecG3img from '../assets/Group 3.png'



const HeroSection = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        {/* NAVBAR START */}
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Foodies
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Service Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Company
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Hero SEction STart */}
        <div className="hero-section">
           <div>

            <div>
                <h1>We<q></q>re Serious For Food.</h1>
                <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
                <button>
                Get Started<FontAwesomeIcon icon={faRightLong} />
                </button>
            </div>

            <div>
            <img src={HeroSecimg1} alt="" />
            <img src={PolCaDot} alt="" />
            <p>5.0 Ratings <img src={RAtingImg} alt="" /></p>
            <p> <img src={GoodqPimg} alt="" /> Good Quality Product</p>
            </div>

           </div>


        <div className="alt-group-sec-img">
        <img src={HeroSecG1img} alt="" />
        <img src={HeroSecG2img} alt="" />
        <img src={HeroSecG3img} alt="" />

        </div>


        </div>

        {/*Hero Section End */}

        {/*FEATURES SECTION START */}
        <hr />
        
        <hr />
        {/*FEATURES SECTION END */}
        






      </div>
    </div>
  );
};

export default HeroSection;
