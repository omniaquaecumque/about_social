import './App.css';
import logo_o from './img/logo_o.png';
import logo_s from './img/logo.png';

function App() {
  return (
    <div id="Home">  
      <img src={logo_o}  className="Orientater_logo" alt="logo_o" />
      <div class="vl"></div>
      <h1>About</h1>
      <p class="one">SOC!AL is a new platform</p>
      <p class="two">designed by students for students.</p>
      <p class="three">Our goal is simple: Help people connect with</p>
      <p class="four">others <i><u>without</u></i> the awkward "first meeting" phase!</p>
      <p class="five">By joining for free, you will get to</p>
      <p class="six">- meet new people in your class</p>
      <p class="seven">- solve puzzles and play games together</p>
      <p class="eight">- get entered into our competition for prizes</p>
      <p class="nine">- so much more :)</p>
      <a
          className="Register-link"
          href="https://forms.gle/v4eKhGvZTjpVwMX88"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for our event
        </a>
      <img src={logo_s}  className="Social_logo" alt="logo_s" />
    </div>
  );
}

export default App;
