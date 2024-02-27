export default function Project({ className, data }) {
  return (
    <div className={(className ? className : '')  + " grid grid-cols-7 grid-rows-1"}>
      <div className='col-span-3 m-auto'> {/* image */}
        <img className="object-contain" src={data.image} alt={data.title} />
      </div>
      <div className='col-span-4 grid grid-rows-2 h-full max-h-full px-6'> {/* content */}
        <div>
          <div>{data.title} -{data.year}</div>
          <div>{data.type} </div>
          <div>{data.plateforme} </div>
          <div>{data.teamSize} </div>
          <div>{data.duration} </div>
          <div>
            {data.tools.map((tool, index) => (
              <span>{index < (data.tools.length - 1) ? tool + ', ' : tool}</span>
            ))}
          </div>
          <div> {data.projectLink} </div>
          <div> {data.awarded && data.awarded} </div>
        </div>
        <div className='flex-1 overflow-y-scroll break-words bg-sky-100'>
          <div> {data.pitch} </div>
          <div> {data.mission} </div>
          <div> {data.designProcess} </div>
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

