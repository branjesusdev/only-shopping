import { useState } from "react";

import ShirtCard from "@infrastructure/presentation/components/ShirtCard";
import ModalProduct from "@infrastructure/presentation/components/ModalProduct";

import DirectoryPathShirts from "@domain/logic/DirectoryPathShirts";

function Products({ productsArray }) {
  const [showPreview, setShowPreview] = useState(false);
  const [productData, setProductData] = useState({
    image: "",
    description: "",
    precie: "",
    sizes: [],
  });

  const handlePreviewShow = ({ image, description, precie, sizes }) => {
    setShowPreview(true);
    setProductData({ image, description, precie, sizes });
  };

  const handlePreviewHide = () => {
    setShowPreview(false);
  };

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-8 py-5 xl:py-40 relative">
      <div className="absolute opacity-60 pointer-events-none bg-teal-200/40 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>
      <div className="absolute opacity-60 pointer-events-none bg-amber-200/20 mix-blend-multiply rounded-full filter blur-3xl inset-0"></div>

      {productsArray &&
        productsArray.map((product) => {
          return (
            <ShirtCard
              image={DirectoryPathShirts() + `${product.image}`}
              key={product.ref}
              sizes={product.sizes}
              precie={product.precie}
              description={product.description}
              handleViewProduct={handlePreviewShow}
            ></ShirtCard>
          );
        })}

      {productsArray && (
        <ModalProduct
          showPreview={showPreview}
          handlePreviewHide={handlePreviewHide}
          image={productData.image}
          description={productData.description}
          precie={productData.precie}
          sizes={productData.sizes}
        ></ModalProduct>
      )}
    </section>
  );
}

export default Products;
