import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import useLocalStorage from 'use-local-storage';
import Intro from './components/Intro';
import Works from './components/Works';
import Skills from './components/Skills';


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  return (
    <>
     <div  data-theme={theme}>
        <Header theme={theme} setTheme={setTheme}/>
        <Intro theme={theme}/>
        <About />
        <Skills/>
        <Works/>
        <Contact/>
        <Footer />
     </div>
    </>
  );
}

export default App;
