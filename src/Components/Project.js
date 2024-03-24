export default function Project({ className, data }) {
  return (
    <div className={(className ? className : '')  + " grid grid-cols-7 grid-rows-1"}>
      <div className='col-span-4 m-auto'> {/* image */}
        <img className="object-contain" src={data.image} alt={data.title} />
      </div>
      <div className='col-span-3 grid grid-rows-2 h-full max-h-full pr-16 divide-y divide-dashed divide-gray-400 divide-y-2 selection:bg-yellow-200 bg-gradient-to-t from-indigo-100'> {/* content */}
        <div className="pt-16 title-bg">
          <div className="flex flex-row justify-between p-3 bg-white">
            <div className="text-3xl">{data.title}</div>
            <div className="text-xl">{data.year}</div>
          </div>
          <div className="pt-4 text-blue-900/100">
            <div><b>Type de projet:</b> {data.type} </div>
            <div><b>Plateforme:</b> {data.plateforme} </div>
            <div><b>Taille d'équipe:</b> {data.teamSize} </div>
            <div><b>Durée:</b> {data.duration} </div>
            <div> <b>Outils utilisés:</b>
              {data.tools.map((tool, index) => (
                <span> {index < (data.tools.length - 1) ? tool + ', ' : tool}</span>
              ))}
            </div>
            <div> <b>Lien du projet:</b> <a className="underline" href={data.projectLink}>{data.projectLink && data.projectLink} </a></div>
            <div> <b>Nominé:</b> {data.awarded && data.awarded} </div>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto break-words h-52 mt-12 pt-4 text-justify'>
          <b> Pitch </b>
          <div> {data.pitch} </div>
          <br/>
          <ul className="list-disc list-inside whitespace-pre-line"> <b>Mes missions</b>
          {data.mission.map((mission, index) => 
            <li> {index < (data.mission.length -1) ? mission + ' ' : mission}</li>
          )}
          </ul>
          <br/>
          <b> Design process </b>
          <div> {data.designProcess} </div>
          <br/>
          <b> Documentation </b>
          <div> 
            {data.docs.map((doc, index) => (
              <span>{index < (data.docs.length - 1) ? doc + ', ' : doc}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

