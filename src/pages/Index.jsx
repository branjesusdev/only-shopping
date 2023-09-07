
import FocusSite from '../layouts/FocusSite'
import Products from '../layouts/Products'

function Index() {
  return (
    <>
      <main className="pt-0 p-5 md:px-10 lg:px-20 relative min-h-screen">
        
        <FocusSite></FocusSite>
        <Products></Products>
        
      </main>
    </>
  );
}

export default Index;
