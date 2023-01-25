import './App.css';
import { AboveFooter,AboveNavbar,Footer,Navbar,Partners,Posts,Services,SlideShow } from './components';


function App() {
  return (
    <>
    <div className="btn-back_to_top">
      <span className="">go to top</span>
    </div>
    <AboveNavbar/>
    <Navbar/>
    <SlideShow/>
    <Services/>
    <Partners/>
    <Posts/>
    <AboveFooter/>
    <Footer/>
    </>
    );
}

export default App;
