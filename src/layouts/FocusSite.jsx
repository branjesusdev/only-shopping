import useIsFixedScroll from "../hooks/useIsFixedScroll";
import IconWhatsApp from '../components/content/IconWhatsApp'
import IconFacebook from "../components/content/InconFacebook";

function FucusSite() {
  const { isFixed } = useIsFixedScroll({ elementById: "card-filter--search" });
  const bgBeams = "'/src/assets/images/beams-home.jpg'"
  const imgFocus = "/src/assets/images/girl-shirt.png"

  return (
    <>
      <section className="xl:px-32 ">
        <div className={`absolute overflow-hidden bg-[url(${bgBeams})] inset-0 bg-contain bg-no-repeat`}></div>

        <article className="min-h-[80vh] flex flex-row py-8 justify-between relative">
          <div className="flex flex-col items-left justify-center animate-fade-up">
            <h1 className="text-slate-900 text-[2rem] md:text-[3rem] xl:text-[5rem] font-bold drop-shadow-sm">
              Viste con estilo
            </h1>
            <p className="text-indigo-600 font-semibold text-[1.2rem] md:text-[1.8rem] xl:text-[3rem]">
              Elige tu camiseta
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imgFocus}
              alt="Blusa dama con colores de fondos en degradado"
              width="400"
              height="400"
              className="w-full h-[10rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[30rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem] animate-fade-up"
            />
          </div>
        </article>
      </section>

      <section
        id="card-filter--search"
        className={`${
          isFixed
            ? "fixed top-0 left-0 rounded-b-md py-3 px-3 xl:px-28 "
            : "relative rounded-3xl py-3 px-4 xl:p-12"
        } 
        border-solid border-[1px] border-[rgb(0,0,0,.1)] w-full [transition:_all_0.3s_ease] mb-20 shadow-md z-20 bg-white `}
      >
        <div className="flex flex-row justify-between">
          <div>
            
          </div>

          <div className="grid grid-cols-2 gap-2 xl:gap-6">
            <IconWhatsApp classProp="w-10 h-10 xl:w-12 xl:h-12 text-[#25D366] drop-shadow-md animate-jump-in"></IconWhatsApp>
            <IconFacebook classProp="w-10 h-10 xl:w-12 xl:h-12 text-[#4267B2] drop-shadow-md animate-jump-in"></IconFacebook>
          </div>
        </div>
      </section>
    </>
  );
}

export default FucusSite;
