import './App.css';
import AboutPage from './components/About/about';
import Header from './components/Header/header';
import HomePage from './components/Home/home';
import Skills from './components/skills/skills';
import Projects from './components/Projects/project';
import Qualification from './components/qualification/qualification';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Scroll from './components/scroll/scroll';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <HomePage />
        <AboutPage />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
