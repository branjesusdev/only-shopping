import ShirtCard from "@/components/ShirtCard";
import DirectoryPathShirts from "@/logic/DirectoryPathShirts";

function Products( { productsArray } ) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-8 py-5 xl:py-40 relative">
      <div className="absolute opacity-60 pointer-events-none bg-teal-200/40 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>
      <div className="absolute opacity-60 pointer-events-none bg-amber-200/20 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>

      {productsArray && productsArray.map((product) => {
        return (
          <ShirtCard
            image={DirectoryPathShirts() + `${product.image}`}
            key={product.ref}
            sizes={product.sizes}
            precie={product.precie}
            description={product.description}
          ></ShirtCard>
        );
      })}
    </section>
  );
}

export default Products;
