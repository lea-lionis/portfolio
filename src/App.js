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
    <div className="grid grid-rows-12 h-screen max-h-screen">
      <div className={(showFooter ? 'row-span-9' : 'row-span-12') + ' grid grid-cols-12 grid-rows-1'}> {/* content layer */}
        <div className='col-span-2 flex flex-col bg-blue-950 px-5 pt-5 space-y-12'> {/* navbar */}
          <div className='flex'>
            <img className="h-10 pr-3 object-contain" src="./img/projet_1.png" alt='Logo Léa Lionis' />
            <h1 className='text-4xl text-center text-white'>Portfolio</h1>
          </div>
          <hr class="border-gray-800 dark:border-white" />
          <div className='flex flex-col px-3 text-xl space-y-7'>
            <div className='flex flex-row space-x-8 justify-between'>
              <img className="h-9 object-contain" src="./img/projet_1.png" alt='Logo Léa Lionis' />
              <ButtonNavbar onClick={() => changeFooterVisibility(false)}>A propos</ButtonNavbar>
            </div>
            <div className='flex flex-row space-x-8 justify-between'>
              <img className="h-9 object-contain" src="./img/projet_1.png" alt='Logo Léa Lionis' />
              <ButtonNavbar onClick={() => changeFooterVisibility(true)}>Projets</ButtonNavbar>
            </div>
            <div className='flex flex-row space-x-8 justify-between'>
              <img className="h-9 object-contain" src="./img/projet_1.png" alt='Logo Léa Lionis' />
              <ButtonNavbar onClick={() => changeFooterVisibility(false)}>Me contacter</ButtonNavbar>
            </div>
          </div>
        </div>
        <div className='col-span-10 bg-stone-200 max-h-full'> {/* project */}
          {selectedProject && <Project className="max-h-full h-full" data={selectedProject} />}
        </div>
      </div>
      {showFooter && (
        <Footer className="bg-sky-200/50 row-span-3 pl-12 divide-x divide-dashed divide-gray-400 divide-x-2 p-7" lstProject={projects[projectCateg]} setSelectedProject={setSelectedProject}>
          <ButtonFooter onClick={() => setProjectCateg("jeux")}>Jeux</ButtonFooter>
          <ButtonFooter onClick={() => setProjectCateg("levelDesign")}>Level Design</ButtonFooter>
          <ButtonFooter onClick={() => setProjectCateg("art")}>3D Art</ButtonFooter>
        </Footer>
      )}
    </div>
  );
}

export default App;
