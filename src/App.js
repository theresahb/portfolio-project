import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-container flex'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='other'>
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
