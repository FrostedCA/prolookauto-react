import './style.css'

import { Navbar, Contact, Hero, About, FindUs, Services, Footer } from './components'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='background'/>
        <Navbar/>
        <Hero/>
      </div>
      <br/>
      <About/>
      <Services/>
      <Contact/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
