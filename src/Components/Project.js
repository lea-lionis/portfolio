export default function Project({ className, data }) {
  return (
    <div className={(className ? className : '')  + " grid grid-cols-7 grid-rows-1"}>
      <div className='col-span-4 m-auto'> {/* image */}
        <img className="object-contain" src={data.image} alt={data.title} />
      </div>
      <div className='col-span-3 grid grid-rows-2 h-full max-h-full pr-16 divide-y divide-dashed divide-gray-400 divide-y-2 selection:bg-yellow-200'> {/* content */}
        <div className="pt-16">
          <div className="flex flex-row justify-between p-3 bg-white">
            <div className="text-3xl">{data.title}</div>
            <div className="text-xl">{data.year}</div>
          </div>
          <div className="font-bold pt-4">
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
        </div>
        <div className='flex-1 overflow-y-scroll break-words h-52 mt-12 pt-4'>
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

