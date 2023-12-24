import logo from '../assets/logo.jpeg'

export default function Footer() {
  return (
    <div id='footer' className="flex h-90 flex-1 bg-amber-200 flex-col p-12">
      <h3 className='text-amber-700' style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 800 }}>Contact Us</h3>
      <div className=' flex gap-4 flex-wrap'>
        <img src={logo} className='w-32 bg-white p-2 rounded-full' />
        <div className=''>
          <div style={{ alignItems: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 700 }} className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>Maguva Healthy Foods</p><p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16 }}>16/2/360, 2nd Line, Srinivasa Agraharam, Near Vijayamahal Gate, Nellore-524001</p>
          </div>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800 }}>We also accept bulk orders.</p>
          <p className="flex" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16 }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>+91 82470 36610</p>
          <p className="flex" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16 }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>supriyachevula@gmail.com</p>
        </div>
      </div>
      <div>

      </div>
    </div>

  )
}
