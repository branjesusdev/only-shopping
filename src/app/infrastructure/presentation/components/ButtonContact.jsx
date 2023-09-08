function ButtonContact({ textButton, redirectTo }) {
  return (
    <a
      href={redirectTo}
      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 
      to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 
      dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg 
      dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center flex items-center  justify-between xl:space-x-3"
      target="_blank"
    >
      <span>{textButton}</span>

      <svg
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
    </a>
  );
}

export default ButtonContact;
