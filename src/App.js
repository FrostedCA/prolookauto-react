import './style.css'
import background from './img/background-car.jpg';

import { Navbar, Contact, Hero, About, FindUs, Services, Footer } from './components'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='app_background' alt='background' src={background}/>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Services/>
      <Contact/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
