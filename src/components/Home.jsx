import heroImage from '../assets/heroimage.jpg'

export default function Home() {
  return (
    <div id='home' className="flex min-h-screen flex-col">
      <div className="">
        <div style={{ background: `url(${heroImage})`, backgroundRepeat: 'no-repeat', display: 'flex', flex: 1, backgroundSize: 'cover', height: 600, alignItems: 'center' }} className='h-5/6'>
          <div className='flex flex-1 justify-center flex-col'>
            <p className='text-5xl font-bold text-white text-center'>Authentic Andra Powder</p>
            <p className='text-xl text-white text-center'>Homemade masala powders<subscript>®</subscript></p>
          </div>
        </div>
      </div>
    </div>
  );
}
