import ButtonContact from '../components/ButtonContact'

function ShirtCard({ image }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg rounded-b-full"
          src="/public/images/shirts/modelo.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        {/* <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Camisa blanca</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">S</span>
<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">M</span>

        <div className="flex items-left justify-start flex-col xl:flex-row xl:items-center xl:justify-between space-y-2">
          <span className="text-lg lg:text-xl xl:text-3xl font-bold text-gray-900 dark:text-white">
            $20.000
          </span>
          <ButtonContact textButton="Comprar"></ButtonContact>
        </div>
      </div>
    </div>
  );
}

export default ShirtCard;
