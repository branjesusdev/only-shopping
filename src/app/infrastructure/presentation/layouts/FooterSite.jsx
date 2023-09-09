import IconWhatsApp from "@infrastructure/presentation/components/content/IconWhatsApp";
import IconFacebook from "@infrastructure/presentation/components/content/InconFacebook";
import IconPhone from "@infrastructure/presentation/components/content/IconPhone";
import IconMapPin from "@infrastructure/presentation/components/content/IconMapPin";

function FooterSite({ linkWhatsApp, linkFacebook }) {
  return (
    <footer className="rounded-t-[2rem] lg:rounded-t-[4rem] bg-slate-900 py-10 p-5 md:px-10 lg:px-20 relative text-slate-50">
      <article className="flex flex-row justify-start items-center">
        <img src="/shopping.svg" alt="Icono de Shopping Online" width="50" height="50"/>
        <h1 className=" text-3xl">Only Shopping</h1>
      </article>

      <article className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8 [&>div>p:first-child]:text-indigo-100">
        <div className="flex flex-col gap-6">
          <p className="text-sm">Quiénes somos </p>
          <p className="max-w-[30ch]">
            Te brindamos una selección única de camisas de catálogo para que
            expreses tu estilo personal en todo momento.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm">Donde encontrarnos </p>
          <div className="flex flex-row gap-3">
            <IconMapPin></IconMapPin>
            <p>Fusagasugá</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-sm">Donde contactarnos </p>
          <div
            className="[&>div]:flex [&>div]:flex-row [&>div]:gap-5 [&>div]:mb-3
            [&>div:not(:last-child)>a]:cursor-pointer [&>div:not(:last-child)>a]:underline [&>div:not(:last-child)>a]:[text-underline-offset:5px]"
          >
            <div>
              <IconWhatsApp></IconWhatsApp>
              <a
                href={linkWhatsApp}
                target="_blank"
                aria-label="Consultar más sobre nuestros procutos por WhatsApp"
              >
                WhatsApp
              </a>
            </div>
            <div>
              <IconFacebook></IconFacebook>
              <a
                href={linkFacebook}
                target="_blank"
                aria-label="Consultar más sobre nuestros procutos por Facebook"
              >
                Facebook
              </a>
            </div>
            <div>
              <IconPhone></IconPhone>
              <a>(+57) 322 443 0609 - (+57) 320 000 0011</a>
            </div>
          </div>
        </div>
      </article>
    </footer>
  );
}

export default FooterSite;
