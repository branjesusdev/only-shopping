function FilterShirt( { isFixed } ) {

  if(!isFixed) return

  return (
    <section id='card-filter--search' 
      className={ `${isFixed ? 'fixed top-0 left-0 rounded-b-lg p-8 translate-y-0' : 
      'relative rounded-3xl p-12 translate-y-full'
    } 
      backdrop-blur-3xl border-solid border-[1px] 
      border-[rgb(0,0,0,.1)] w-full [transition:_transform_0.3s_ease]`
      }>
        <div>
          <h1 className='text-3xl text-black'>Hola Fijo</h1>
        </div>
      </section>
  )

}

export default FilterShirt