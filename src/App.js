import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { NoteState } from './context/notes/noteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
      <Navbar/>
      <Alert message = "Welcome to my notebook!"/>
      <div className="container">
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/about" element = {<About/>}/>
      </Routes>
      </div>
      </NoteState>
    </>
  );
}

export default App;
