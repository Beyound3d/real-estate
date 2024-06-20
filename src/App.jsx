import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import './App.css';
import Companies from './component/Companies/Companies';
import Residencies from './component/Residencies/Residencies';
import Estatevalue from './component/Estatevalue/Estatevalue';
import Contact from './component/Contact/Contact';
import GetStarted from './component/GetStarted/GetStarted';
import Footer from './component/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Estatevalue/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
