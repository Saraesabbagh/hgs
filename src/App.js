import "./App.css";
import bench from "./images/bench.jpg";
import donate from "./images/donate.jpg";
import volunteer from "./images/volunteer.jpg";

function App() {
  const navContainer = document.querySelector(".nav-container");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Set a threshold value for the scroll position (adjust as needed)
    const scrollThreshold = 100;

    // Calculate the opacity based on the scroll position
    const opacity = Math.min(scrollY / scrollThreshold, 0.5);

    // Set the background color to translucent white
    navContainer.style.background = `rgba(255, 255, 255, ${opacity})`;
  });
  return (
    <div className="App">
      <div className="hero-container">
        <div className="nav-container">
          <nav>
            <span>
              <ul>
                <li>
                  <a href="#donate">Donate</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#volunteer">Tea Parties</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </span>
          </nav>
        </div>

        <div className="hero-content">
          <h4>Welcome To</h4>
          <div className="hero-title">
            <h1>HGS</h1>
            <h2>Rose Garden</h2>
          </div>
        </div>
      </div>
      <div id="donate" className="donate-container">
        <div className="donate-image">
          <img
            src={donate}
            alt="bench in garden"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="donate-text">
          <h3 className="donate-title">Donate</h3>
          <h5 className="donate-subtitle">Please Support Us;</h5>
          <p>
            Could you please support our work by making a much-needed donation.
            <br />
            Our bank details are:
            <br />
            Northway Gardens Organisation (NGO)
            <br />
            NATWEST Account: 66631904
            <br />
            Sort: 51 - 50 -11
            <br />A Cheque can also be sent to;
            <br />
            NGO c/o 69 Brookland Rise NW11 6DT
            <br />
            0208 458 5313
            <br />
            ingrambluebird@hotmail.com
          </p>
        </div>
      </div>
      <div id="about" className="about-container">
        <div className="about-text">
          <h3 className="about-title">What We Do</h3>
          <p>
            Northway Gardens is an historic 120-year-old park in Hampstead
            Garden Suburb. Local volunteers have been restoring the Northway
            Rose Gardens since October 2014 as well as the whole ten acres of
            the park. (Including Fletchers Gardens, the park opposite Cafe
            Toulous NW11 6NY)
          </p>
        </div>
        <div className="about-image">
          <img
            src={bench}
            alt="bench in garden"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="come-explore-container">
        <h2 className="come-explore-title">Come</h2>
        <h2 className="come-explore-title"> Explore</h2>
      </div>

      <div id="volunteer" className="volunteer-container">
        <div className="volunteer-text">
          <h3 className="volunteer-title">Tea Parties</h3>
          <div className="volunteer-paragraphs">
            <p>
              Every Thursday (not winter) we have Tea Mornings in the park where
              the community can get together and enjoy the park tranquility and
              socialize.
            </p>
            <p>
              Wednesday is a community Tea Morning in Romeo and Juliet Cafe in
              the Market Place.
            </p>
            <p>
              We have also had parties for dogs and children's birthdays and for
              HGS Elders.
            </p>
          </div>
        </div>
        <div className="volunteer-image">
          <img
            src={volunteer}
            alt="bench in garden"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="lovehgs-container">
        <h2 className="lovehgs-title">Love HGS</h2>
      </div>
      <div id="contact" className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Keep up </h2>
          <h2 className="contact-title">to date on </h2>
          <h2 className="contact-title"> Facebook</h2>
        </div>
        <div className="contact-social">
          <a
            className="contact-social"
            href="https://www.facebook.com/groups/337257630584408"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>HAMPSTEAD GARDEN SUBURB RESIDENTS</p>
          </a>
          <a
            className="contact-social"
            href="https://www.facebook.com/profile.php?id=100064469361231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>HGS Rose Gardens</p>
          </a>
          <a
            className="contact-social"
            href="https://www.facebook.com/profile.php?id=100082580617557"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Friends of Hampstead Garden Suburb</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
