import './App.css';
import Bio from './components/Bio';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import RList from './components/RList';
import Roles from './components/Roles';
import RoleSwitched from './components/RoleSwitched';



function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <h1 className = "projects-title">CODING PROJECTS</h1>
      <Projects/>
      <Button/>
      <h1 className = "roles-title">ROLES</h1>
      <Roles/>
      <RoleSwitched/>
      <Roles/>
      <Button/>
      <h1 className="reading-title">READING LIST</h1>
      <RList/>
      <Footer/>
    </div>
  );
}

export default App;
