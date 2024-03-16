export default function Footer({ className, children, lstProject, setSelectedProject }) {
  return (
    <footer className={(className ? className : '') + ' flex px-3'}>
      <div className='flex flex-col my-auto text-center space-y-4'>
        {children}
      </div>
      <div className="pl-10 flex space-x-14">
        {/*map = fonction parcourant un tableau et retournant le visuel que l'on veut de chaque item */}
        {lstProject && lstProject.map((project) => (
          <div key={project.title} className='my-auto flex flex-col text-center'>
            <button onClick= {() => setSelectedProject(project) }>
              <img className='object-contain h-28 mx-auto' src={project.image} alt={project.title} />
            </button>
            {project.title}
          </div>
        ))}
      </div>
    </footer>
  )
}  