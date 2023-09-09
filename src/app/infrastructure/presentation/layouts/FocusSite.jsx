import imgFocus from '@/assets/images/girl-shirt.avif';

function FucusSite() {

  return (
    <>
      <section className="xl:px-32 ">
        <div className={`absolute overflow-hidden bg-[url('/src/assets/images/beams-home.avif')] inset-0 bg-contain bg-no-repeat`}></div>

        <article className="min-h-[80dvh] flex flex-row py-8 justify-between relative">
          <div className="flex flex-col items-left justify-center animate-fade-up">
            <h1 className="text-slate-900 text-[2rem] md:text-[3rem] xl:text-[5rem] font-bold drop-shadow-sm">
              Viste con estilo
            </h1>
            <p className="text-indigo-600 font-semibold text-[1.2rem] md:text-[1.8rem] xl:text-[3rem]">
              Elige tu camiseta
            </p>
          </div>
          <div className="flex items-center w-[10rem]  sm:w-[20rem]  md:w-[30rem] xl:w-[32rem] 2xl:w-[40rem]">
            <img
              src={imgFocus}
              alt="Blusa dama con colores de fondos en degradado"
              width="1280"
              height="1280"
              decoding="async"
              fetchpriority="high"
              sizes="(max-width: 1280px) 100px, 1280px"
              data-sizes="(max-width: 1280px) 100px, 1280px"
              data-ll-status="loaded"
              className="h-auto w-full animate-fade-up align-middle inline-block"
              data-src={imgFocus}
              srcSet={`${imgFocus} 1280w`}
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default FucusSite;
