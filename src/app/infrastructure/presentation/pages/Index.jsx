
import { useEffect } from 'react';
import { useState } from 'react';

import { getProducts } from '@infrastructure/adapters/products'
import { linkWhatsApp, linkFacebook } from '@/app/config/defaults'

import FocusSite from '@infrastructure/presentation/layouts/FocusSite'
import Products from '@infrastructure/presentation/layouts/Products'
import FilterCatalog from '@infrastructure/presentation/layouts/FilterCatalog'

import ModalProduct from "@infrastructure/presentation/components/ModalProduct";

function Index() {
  const [ products, setProducts ] = useState([])
  const [ skeleton, setSkeleton ] = useState(true)

  const actionWhatsApp = `${linkWhatsApp}Hola!! Quiero más información`
  const actionFacebook = linkFacebook

  const refreshProducts = () => {
    getProducts().then( ({code, products}) => {
      if(code == 200)
        setProducts(products) 
      else 
        setSkeleton(false)
    })
  }

  useEffect(refreshProducts , [])

  return (
    <>
      <main className="pt-0 p-5 md:px-10 lg:px-20 relative min-h-[100dvh]">
        
        <FocusSite></FocusSite>
        <FilterCatalog linkWhatsApp={actionWhatsApp} linkFacebook={actionFacebook}></FilterCatalog>
        <Products productsArray={products} skeletonStatus={skeleton}></Products>

        <ModalProduct></ModalProduct>
        
      </main>
    </>
  );
}

export default Index
