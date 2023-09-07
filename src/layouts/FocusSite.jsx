import imgFocus from '@/assets/images/girl-shirt.avif';

function FucusSite() {

  return (
    <>
      <section className="xl:px-32 ">
        <div className={`absolute overflow-hidden bg-[url('/src/assets/images/beams-home.avif')] inset-0 bg-contain bg-no-repeat`}></div>

        <article className="min-h-[80vh] flex flex-row py-8 justify-between relative">
          <div className="flex flex-col items-left justify-center animate-fade-up">
            <h1 className="text-slate-900 text-[2rem] md:text-[3rem] xl:text-[5rem] font-bold drop-shadow-sm">
              Viste con estilo
            </h1>
            <p className="text-indigo-600 font-semibold text-[1.2rem] md:text-[1.8rem] xl:text-[3rem]">
              Elige tu camiseta
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={imgFocus}
              alt="Blusa dama con colores de fondos en degradado"
              width="400"
              height="400"
              className="h-[10rem]  sm:h-[20rem]  md:h-[30rem] xl:h-[32rem] 2xl:h-[40rem] w-auto animate-fade-up"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default FucusSite;
