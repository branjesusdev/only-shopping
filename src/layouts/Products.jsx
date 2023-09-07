// COMPONENTS

import ShirtCard from "../components/ShirtCard";

// LOGIC

import DirectoryPathShirts from "../logic/DirectoryPathShirts";

function Products() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-8 py-5 xl:py-40 relative">
      <div className="absolute opacity-60 pointer-events-none bg-teal-200/40 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>
      <div className="absolute opacity-60 pointer-events-none bg-amber-200/20 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
        return (
          <ShirtCard
            image={DirectoryPathShirts() + `${"modelo.jpg"}`}
            key={item}
            sizes={['S', 'M']}
            precie={'$20.000'}
            description={'Camisa para dama elegante '}
          ></ShirtCard>
        );
      })}
    </section>
  );
}

export default Products;
