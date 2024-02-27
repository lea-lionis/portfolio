import './App.css';
import { useEffect, useState } from 'react';
import projects from './data_classfied.json';
import Project from './Components/Project';
import ButtonNavbar from './Components/ButtonNavbar';
import Footer from './Components/Footer';
import ButtonFooter from './Components/ButtonFooter';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [projectCateg, setProjectCateg] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  function changeFooterVisibility(newVisibility) {
    if (! newVisibility) {  // Si visibilité du footer fausse
      setSelectedProject(null); // on enlève les données des projets selectionnés
      setProjectCateg(null); // + celles des categs
    }
    setShowFooter(newVisibility); // Mise à jour de la visibilité du footer
  }

  useEffect(() => {
    console.log(projects);
  }, [])

  return (
    <div className="grid grid-rows-12 h-screen max-h-screen bg-red-900">
      <div className={(showFooter ? 'row-span-9' : 'row-span-12') + ' grid grid-cols-12 grid-rows-1'}> {/* content layer */}
        <div className='col-span-2 flex flex-col bg-sky-900 px-5 pt-12 space-y-5'> {/* navbar */}
          <div className='flex'>
            <img className="h-10 pr-5 object-contain" src="./img/projet_1.png" alt='Logo Léa Lionis' />
            <h1 className='text-2xl text-center'>Portfolio</h1>
          </div>
          <div className='flex flex-col'>
            <ButtonNavbar onClick={() => changeFooterVisibility(false)}>A propos</ButtonNavbar>
            <ButtonNavbar onClick={() => changeFooterVisibility(true)}>Projets</ButtonNavbar>
            <ButtonNavbar onClick={() => changeFooterVisibility(false)}>Me contacter</ButtonNavbar>
          </div>
        </div>
        <div className='col-span-10 bg-orange-100 max-h-full'> {/* project */}
          {selectedProject && <Project className="max-h-full h-full" data={selectedProject} />}
        </div>
      </div>
      {showFooter && (
        <Footer className="bg-sky-200/50 row-span-3" lstProject={projects[projectCateg]} setSelectedProject={setSelectedProject}>
          <ButtonFooter onClick={() => setProjectCateg("jeux")}>Jeux</ButtonFooter>
          <ButtonFooter onClick={() => setProjectCateg("levelDesign")}>Level Design</ButtonFooter>
          <ButtonFooter onClick={() => setProjectCateg("art")}>3D Art</ButtonFooter>
        </Footer>
      )}
    </div>
  );
}

export default App;
