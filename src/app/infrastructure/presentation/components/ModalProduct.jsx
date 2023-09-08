import ButtonContact from "@infrastructure/presentation/components/ButtonContact";

import { linkWhatsApp } from '@/app/config/defaults'

function ModalProduct({ image, description, precie, showPreview, handlePreviewHide }) {

  if(!showPreview) return

  return (
    <>
      <section
        tabIndex="1"
        className="fixed top-0 left-0 w-full h-full 
          bg-[#0000004d] 
            inset-0 z-50 
            backdrop-blur-md 
            overflow-hidden flex 
            place-content-center items-center
            animate-jump-in animate-once animate-duration-[400ms] animate-ease-linear"
      >
        <img
          src={image}
          alt=""
          className="max-w-[95%] max-h-[95%] rounded-3xl"
        />
        <span className="absolute top-5 right-5 text-white cursor-pointer" onClick={handlePreviewHide}>
          <svg
            className="w-10 h-10 md:w-20 md:h-20"
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
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>

        <div className="absolute top-[5%] bg-[rgba(88,80,236,0.34)] [filter:drop-shadow(0_0_.5em_rgba(253,233,71,0.986))] rounded-xl p-3">
          <p className="text-4xl text-slate-900 font-semibold">{precie}</p>
        </div>

        <div className="absolute bottom-[5%] [filter:drop-shadow(0_0_.5em_rgba(88,233,71,0.986))]">
          <ButtonContact
            textButton="Comprar"
            redirectTo={`${ linkWhatsApp + description }`}
          ></ButtonContact>
        </div>
      </section>
    </>
  );
}

export default ModalProduct;
