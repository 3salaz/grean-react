function Team() {
  return (
    <div id="team" className='scrollContent bg-[#F3F4F6] flex flex-col'>
      <div className='container bg-white md:h-[650px] w-full'>
        <div className='flex flex-col md:flex-row items-center gap-10md: h-full rounded-md'>
          <div className='basis-1/3 md:h-full bg-blue-200 h-[550px] w-full'>
            <ul className='flex flex-col h-full'>
              <li className='basis-1/3 flex flex-col items-center justify-center'>
                <img alt="team member" className='object-cover rounded-full bg-orange-400' src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fheadshots%2F1.png?alt=media&token=aac5f3df-d7ab-4007-ab17-26bef9d8c0c8"/>
                <h3>First Last</h3>
                <div>
                </div>
              </li>
              <li className='basis-1/3 flex items-center justify-center'>
                <img alt="team member" className='object-cover rounded-full bg-orange-400' src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fheadshots%2F2.png?alt=media&token=e1bd9b6a-209e-41d7-b6a0-e79cebd8e16c"/>
              </li>

              <li className='basis-1/3   flex items-center justify-center'>
                <img alt="team member" className='object-cover rounded-full bg-orange-400' src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fheadshots%2F4.png?alt=media&token=4b92ff1e-99e3-4604-b0a5-6a1e4e7d32ec"/>
              </li>
            </ul>
          </div>
          <div className='basis-1/3 h-full bg-blue-300 w-full'>Company</div>
          <div className='basis-1/3 h-full bg-blue-400 w-full'>
            <div className="flex flex-col">
              <div>Drivers</div>
              <div>Clients</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
 
  )
}

export default Team