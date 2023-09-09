import ButtonContact from "@infrastructure/presentation/components/ButtonContact";
import { linkWhatsApp, messageContactProduct } from "@/app/config/defaults";

function ShirtCard({ shirdProduct, handleViewProduct }) {
  if (!shirdProduct) return;
  const { image, sizes, precie, description, title, message } = shirdProduct;

  return (
    <blockquote
      className="max-w-sm bg-white border 
      border-gray-200 rounded-lg shadow 
      dark:bg-gray-800 dark:border-gray-700 
        relative flex flex-col justify-between"
    >
      <header>
        <img
          className="rounded-t-[30rem] rounded-b-full cursor-pointer w-full min-h-[8rem] max-h-[28rem] hover:scale-105 align-middle inline-block"
          onClick={() => handleViewProduct(shirdProduct)}
          src={image}
          alt={description}
          title={description}
          width="591"
          height="556"
          decoding="async"
          sizes="(max-width: 591px) 100px, 591px"
          data-sizes="(max-width: 591px) 100px, 591px"
          data-ll-status="loaded"
          data-src={image}
          srcSet={`${image} 591w`}
        />

        <div className="pt-4 px-4 lg:px-5 lg:pt-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </header>
      
      <footer className="p-4 lg:p-5">
        {sizes?.map((size, index) => {
          return (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {size}
            </span>
          );
        })}

        <div className="flex items-left justify-start flex-col xl:flex-row xl:items-center xl:justify-between space-y-2">
          <span className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-slate-900 dark:text-white">
            {precie}
          </span>
          <ButtonContact
            textButton="Comprar"
            redirectTo={`${linkWhatsApp}${messageContactProduct}${message}`}
          ></ButtonContact>
        </div>
      </footer>
    </blockquote>
  );
}

export default ShirtCard;
