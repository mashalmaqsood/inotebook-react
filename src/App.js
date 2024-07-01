import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { NoteState } from './context/notes/noteState';

function App() {
  return (
    <>
    <NoteState>
      <Navbar/>
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/about" element = {<About/>}/>
      </Routes>
      </NoteState>
    </>
  );
}

export default App;
