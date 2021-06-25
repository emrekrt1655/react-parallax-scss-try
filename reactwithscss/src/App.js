import logo from './logo.svg';
import './sass/style.css';
import SectionTypeOne from './components/SectionTypeOne';
import SectionTypeTwo from './components/SectionTypeTwo'

function App() {
  return (
    <div className="App">
      <SectionTypeOne title='parallax website' />
      <SectionTypeTwo title='section one' />
      <SectionTypeOne title='image two text' />
      <SectionTypeTwo title='section two' />
      <SectionTypeOne title='image three text' />
      <SectionTypeTwo title='section three' />
      <SectionTypeOne title='clarusway fullstack team' />
    </div>
  );
}

export default App;
