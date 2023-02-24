import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar"
import {Home} from "./components/Home"
import {Skills} from "./components/Skills"
import {Project} from "./components/Project"
import { FixedContact } from './components/FixedContact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Project />
      <FixedContact />
    </div>
  );
}

export default App;
