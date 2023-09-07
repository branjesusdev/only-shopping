import NequiLogo from "../assets/icons/nequi.avif";

import useIsFixedScroll from "@/hooks/useIsFixedScroll";
import IconWhatsApp from "@/components/content/IconWhatsApp";
import IconFacebook from "@/components/content/InconFacebook";

function FilterCatalog({ linkWhatsApp, linkFacebook }) {
  const fixedElement = "card-filter--search";
  const { isFixed } = useIsFixedScroll({ elementById: fixedElement });

  return (
    <section
      id={fixedElement}
      className={`${
        isFixed
          ? "fixed top-0 left-0 rounded-b-md py-3 px-3 xl:px-28 "
          : "relative rounded-3xl py-3 px-4 xl:px-12 xl:py-5"
      } 
        border-solid border-[1px] border-[rgb(0,0,0,.1)] w-full [transition:_all_0.5s_ease] mb-20 shadow-md z-20 bg-white `}
    >
      <div className="flex flex-row justify-around">
        <div className="flex flex-col gap-3">
          <p className="text-slate-800 text-center font-semibold text-sm">
            Pagos
          </p>
          <div className="border-solid border-b-[1px] border-indigo-200 rounded-lg"></div>
          <img
            src={NequiLogo}
            className="w-24"
            alt="Pagos por Nequi"
            width="200"
            height="80"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-slate-800 text-center font-semibold text-sm">
            Contactanos
          </p>
          <div className="border-solid border-b-[1px] border-indigo-200 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-2 xl:gap-6">
            <a
              href={linkWhatsApp}
              aria-label="Consultar más sobre nuestros procutos por WhatsApp"
              className="cursor-pointer hover:scale-110 transition-all delay-75"
            >
              <IconWhatsApp
                classProp={`${
                  isFixed ? "w-8 h-8" : "w-10 h-10"
                } text-[#25D366] drop-shadow-md animate-jump-in`}
              ></IconWhatsApp>
            </a>
            <a
              href={linkFacebook}
              aria-label="Consultar más sobre nuestros procutos por Facebook"
              className="cursor-pointer hover:scale-110 transition-all delay-75"
            >
              <IconFacebook
                classProp={`${
                  isFixed ? "w-8 h-8" : "w-10 h-10"
                } text-[#4267B2] drop-shadow-md animate-jump-in`}
              ></IconFacebook>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterCatalog;
