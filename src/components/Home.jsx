import heroImage from '../assets/heroimage.jpg'

export default function Home() {
  return (
    <div id='home' className="flex flex-col">
      <div className="">
        <div style={{ background: `url(${heroImage})`, backgroundRepeat: 'no-repeat', display: 'flex', flex: 1, backgroundSize: 'cover', height: 600, alignItems: 'center' }} className='h-5/6'>
          <div className='flex flex-1 justify-center flex-col'>
            <p className='text-7xl text-amber-300 text-center' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 1000 }}>Authentic Andra Powder</p>
            <p className='text-2xl text-amber-200 text-center' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>Homemade masala powders<subscript>®</subscript></p>
          </div>
        </div>
      </div>
    </div>
  );
}
