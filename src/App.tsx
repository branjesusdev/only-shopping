import { useEffect, useState } from 'react'
import ShirtCard from './components/ShirtCard'
import FilterShirt from './components/FilterShirt.jsx'

function App() {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {

    const $filterSection = document.getElementById('card-filter--search');
    const initialOffsetTop = $filterSection?.offsetTop ?? 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= initialOffsetTop)
        setIsFixed(true)
      else 
        setIsFixed(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <main className='pt-0 p-8 lg:px-20 relative min-h-screen'>

      

{/* "background-image:radial-gradient(circle 300px at center, rgba(120,119,198,0.3), hsla(0, 0%, 0%, 0));" */}
{/* <div className="absolute pointer-events-none inset-0" style={{backgroundImage:'radial-gradient(circle 300px at center, rgba(120,119,198,0.3), hsla(0, 0%, 0%, 0))'}}></div> */}



      <section className="px-32  ">

      <div className="absolute overflow-hidden bg-[url('/src/assets/images/beams-home.jpg')] inset-0 ">
  {/* <img src="/src/assets/images/beams-home.jpg" alt="" className='absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem] inset-0'/> */}
</div>


      {/* <div className="absolute pointer-events-none inset-0" style={{backgroundImage:'radial-gradient(circle 300px at center, rgba(120,119,198,0.3), hsla(0, 0%, 0%, 0))'}}></div> */}
      {/* <img src="/src/assets/images/beams-home.jpg" alt="" className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"/> */}

        <article className='min-h-[80vh] flex flex-row py-8 justify-between relative'>
          <div className='flex flex-col items-left justify-center'>
            <h1 className='text-black text-[5rem] font-bold drop-shadow-sm'>Viste con estilo</h1>
            <h3 className='text-[#79274A] text-[3rem]'>Elige</h3>
          </div>
          <div className='flex justify-center items-center'>
            <img src="/src/assets/images/blusa-dama-clipart.png" alt="" width="300" height="200" className='w-[20rem] h-[20rem]'/>
          </div>

        </article>
      </section>

      <section id='card-filter--search' 
      className={ `${isFixed ? 'fixed top-0 left-0 rounded-b-lg py-3 px-20 ' : 'relative rounded-3xl p-12'} 
      backdrop-blur-3xl border-solid border-[1px] border-[rgb(0,0,0,.1)] w-full [transition:_all_0.3s_ease] mb-20 shadow-md z-20 bg-white`}>
        <div className='flex flex-row justify-between'>
          
          <div>

          </div>

          <div className='grid grid-cols-2 gap-6'>

          <svg
          className='w-12 h-12 text-[#25D366] drop-shadow-md'
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
      </svg>

      <svg className='w-12 h-12 text-[#4267B2] drop-shadow-md' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
</svg>

          </div>

        </div>
      </section>

      <section className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-8 py-40 relative'>

      <div className='absolute opacity-60 pointer-events-none bg-teal-200/40 mix-blend-multiply rounded-full filter blur-3xl inset-0'></div>
      <div className="absolute opacity-60 pointer-events-none bg-amber-200/20 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>

        {[1,2,3,4,5,6,7,8,9,10,11,12].map( item => {
          return <ShirtCard key={item}></ShirtCard>
        } )}
      </section>
    </main>
    </>
  )
}

export default App
