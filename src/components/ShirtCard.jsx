import ButtonContact from "@/components/ButtonContact";

function ShirtCard({ image, sizes, precie, description }) {

  const handleViewProduct = () => {}

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-[30rem] rounded-b-full cursor-pointer w-full h-[18rem] md:h-[24rem] xl:h-[30rem]"
        onClick={handleViewProduct()}
        src={image}
        alt={description}
        title={description}
        height="288"
      />
      <div className="p-5">
        {/* <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Camisa blanca</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

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
            redirectTo={
              `${'https://api.whatsapp.com/send?phone=+573204040609&text=👋 Hola!! Quiero más información sobre ' + description}`
            }
          ></ButtonContact>
        </div>
      </div>
    </div>
  );
}

export default ShirtCard;
