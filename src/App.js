import logo from './logo.svg';
import './App.css';
import bench from './images/bench.jpg'
import donate from './images/donate.jpg'
import volunteer from "./images/volunteer.jpg"

function App() {
  return (
    <div className="App">
      <div className='hero-container'>
        <div className='nav-container'>
        <nav>
          <span>
            <ul>
              <li>About</li>
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Contact</li>
            </ul>
            </span>
        </nav>
        </div>
        
        <div className='hero-content'>
          <h4>Welcome To</h4>
          <div className='hero-title'>
            <h1>HGS</h1>
            <h2>Rose Garden</h2>
          </div>
        </div>
      </div>
      <div className='about-container'>
        <h3 className='about-title'>What We do</h3>
        <div className='about-content'>
          <img src={bench} alt="bench in garden" style={{ width: '400px', height: 'auto' }} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, h
          </p>
        </div>
      </div>
      <div className='come-explore-container'>
        <h2 className='come-explore-title'>Come Explore</h2>
      </div>
      <div className='donate-container'>
      <h3 className='donate-title'>Donate</h3>
        <div className='donate-content'>
          <img src={donate} alt="bench in garden" style={{ width: '400px', height: 'auto' }} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error.

          </p>
        </div>

      </div>
      <div className='volunteer-container'>
      <h3 className='volunteer-title'>Volunteer</h3>
        <div className='volunteer-content'>
          <img src={volunteer} alt="bench in garden" style={{ width: '400px', height: 'auto' }} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error.
          </p>
        </div>
      </div>
      <div className='lovehgs-container'>
      <h2 className='lovehgs-title'>Love HGS</h2>
      </div>
      <div className='contact-container'>
        <h4 className='contact-email'>Email@memailaddres.com</h4>
        <h2 className='contact-title'>Get in Touch</h2>
      </div>
    </div>
  );
}

export default App;
