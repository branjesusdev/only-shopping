
import { useEffect } from 'react';
import { useState } from 'react';

import { getProducts } from '@/services/products'

import FocusSite from '@/layouts/FocusSite'
import Products from '@/layouts/Products'
import FilterCatalog from '@/layouts/FilterCatalog'

function Index() {
  const [ products, setProducts ] = useState([])
  const [ notProducts, setNotProducts ] = useState(false)

  const linkWhatsApp = "https://api.whatsapp.com/send?phone=+573204040609&text=Quiero más información"
  const linkFacebook = "https://facebook.com/"

  const refreshProducts = () => {
    getProducts().then( ({code, products}) => {
      if(code == 200)
        setProducts(products) 
      else 
        setNotProducts(true)
    })
  }

  useEffect(refreshProducts , [])

  return (
    <>
      <main className="pt-0 p-5 md:px-10 lg:px-20 relative min-h-[100dvh]">
        
        <FocusSite></FocusSite>
        <FilterCatalog linkWhatsApp={linkWhatsApp} linkFacebook={linkFacebook}></FilterCatalog>
        <Products productsArray={products}></Products>
        
      </main>
    </>
  );
}

export default Index
