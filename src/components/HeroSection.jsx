import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faPercent,
  faRightLong,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import PolCaDot from "../assets/Polcadot.png";
import HeroSecimg1 from "../assets/Place Your Image.png";
import RAtingImg from "../assets/Star.png";
import GoodqPimg from "../assets/Place Your Image (1).png";
import HeroSecG1img from "../assets/Group 1.png";
import HeroSecG2img from "../assets/Group 2.png";
import HeroSecG3img from "../assets/Group 3.png";
import BenefitImg1 from "../assets/Images.png";
import PolCADot2 from "../assets/Polcadot222.png";
import verityimg1 from "../assets/Place Your Image-1.png";
import verityimg2 from "../assets/Place Your Image-2.png";
import verityimg3 from "../assets/Place Your Image-3.png";
import verityimg4 from "../assets/Place Your Image23434234.png";
import op1 from '../assets/11kdjfk.png'
import op2 from '../assets/22slkjfsk.png'
import op3 from '../assets/33ghjgkjf.png'
import op4 from '../assets/44xdsafdsf.png'
import strOP from '../assets/StarOURPRODUCT.png'
import {  faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";




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
              <h1>
                We<q></q>re Serious For Food.
              </h1>
              <p>
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
              <button>
                Get Started
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>

            <div>
              <img src={HeroSecimg1} alt="" />
              <img src={PolCaDot} alt="" />
              <p>
                5.0 Ratings <img src={RAtingImg} alt="" />
              </p>
              <p>
                {" "}
                <img src={GoodqPimg} alt="" /> Good Quality Product
              </p>
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
        <div>
          <div>
            <FontAwesomeIcon icon={faTruck} />
            <h2>Free Shipping</h2>
            <p>Orders over $140</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faWallet} />
            <h2>Quick Payment</h2>
            <p>100% secure payment</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faPercent} />
            <h2>Special Promo</h2>
            <p>Get special promo</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faHeadphones} />
            <h2>24/7 Support</h2>
            <p>Ready support</p>
          </div>
        </div>

        <hr />
        {/*FEATURES SECTION END */}

        {/* OUT BEnefit SEction start */}

        <div>
          <div>
            <img src={BenefitImg1} alt="" />
          </div>
          <div>
            <p>Our Benefit</p>
            <h2>The More Healthy Food The Better</h2>
            <img src={PolCADot2} alt="" />
            <ul>
              <li>Be Alive With Veggie Food.</li>
              <li>
                It<q></q>s The Place To Be.
              </li>
              <li>Nonstop Veggie Food</li>
              <li>The Best Silk Dish In Town</li>
              <li>Truffles, Egg & Pumpkin Spice</li>
            </ul>
          </div>
        </div>

        {/* OUT BEnefit SEction END */}

        {/* OUR STAR SECTION START */}
        <div>
          <div>
            <p>Our Stars</p>
            <h2>Veggie Food Goes On And Always On</h2>

            <div>
              <div>
                <h2>1,500</h2>
                <p>Sold Product</p>
              </div>

              <div>
                <h2>500</h2>
                <p>Possitive Feedback</p>
              </div>

              <div>
                <h2>400</h2>
                <p>Official Store</p>
              </div>
            </div>

            <button>
              Get Special Promo <FontAwesomeIcon icon={faRightLong} />
            </button>
          </div>

          <div>{/* Image lInk star sec */}</div>
        </div>
        {/* OUR STAR SECTION START */}

        {/* FOOD VAriety SECTION START */}
        <section>
          <div>
            <h3>Our Features</h3>
            <h2>Variety Of Foods</h2>
          </div>

          <div>
            <div>
              <img src={verityimg4} alt="" />
            </div>

            <div>
              <h2>Veggies Are Forever</h2>
              <p>We offer the following services</p>
              <button>Discover Now</button>
            </div>

            <div>
              <img src={verityimg3} alt="" />
            </div>

            <div>
              <h2>Good For Your Skin</h2>
              <p>We offer the following services</p>
              <button>Discover Now</button>
            </div>
          </div>

          <div>
            <div>
              <h2>Veggies Are Forever</h2>
              <p>We offer the following services</p>
              <button>Discover Now</button>
            </div>

            <div>
              <img src={verityimg2} alt="" />
            </div>

            <div>
              <h2>That Comes Close</h2>
              <p>We offer the following services</p>
              <button>Discover Now</button>
            </div>
            <div>
              <img src={verityimg1} alt="" />
            </div>
          </div>
        </section>
        {/* FOOD VAriety SECTION END */}

      {/* OUR PRODUCT SECTION START */}
        <section>
         <div>
         <h4>Our Product</h4>
         <h2>Most Popular Product</h2>
         </div>

        <div>




          <div>
            <img src={op1} alt="" />
            <img src={strOP} alt="" />
            <h3>Summer Veganie</h3>
            <p><span>$25</span> $29</p>
            <button>Buy Now  <FontAwesomeIcon icon={faRightLong} /> </button>
          </div>


          <div>
          <img src={op2} alt="" />
            <img src={strOP} alt="" />
            <h3>Greanie Seafood</h3>
            <p><span>$25</span> $29</p>
            <button>Buy Now  <FontAwesomeIcon icon={faRightLong} /> </button>
          </div>


          <div>
          <img src={op3} alt="" />
            <img src={strOP} alt="" />
            <h3>Fresh Vegetable</h3>
            <p><span>$25</span> $29</p>
            <button>Buy Now  <FontAwesomeIcon icon={faRightLong} /> </button>
          </div>


          <div>
             <img src={op4} alt="" />
            <img src={strOP} alt="" />
            <h3>Fresh Meatyus</h3>
            <p><span>$25</span> $29</p>
            <button>Buy Now  <FontAwesomeIcon icon={faRightLong} /> </button>
          </div>





        </div>

        </section>
      {/* OUR PRODUCT SECTION END */}
    {/* Footer Vegie SECTION START */}
    <section>
      <div className="img-bg-bg-vegie">
        <h2>Veggie Foods? Ingredients You Want To Try</h2>
        <button>Get Started <FontAwesomeIcon icon={faRightLong} /></button>
      </div>
    </section>

    {/* Footer Vegie SECTION END */}
    


    {/* FOOTER SECTION START */}
      <section>

        <div>
    










      <div>
       <h2>Foodies</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
       <div>
       <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />

       </div>
      </div>

      <div>
        <h2>About Us</h2>
        <ul>
          <li>About Us</li>
          <li>Service Us</li>
          <li>Contact</li>
          <li>Company</li>
          
        </ul>
      </div>

    <div>
      <h2>Company</h2>
      <ul>
        <li>Partnership</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Sitemap</li>
        
      </ul>
    </div>


    <div>
      <h2>Get in touch</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <input type="text" placeholder="Email" /> <input type="button" value="Subscribe" />
    </div>



      
        </div>

        <h4>Copyright © 2021 Foodies.</h4>
      </section>
    {/* FOOTER SECTION END */}

    
      </div>
    </div>
  );
};

export default HeroSection;
