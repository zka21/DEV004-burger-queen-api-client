import { NavWaiter } from './NavWaiter.jsx'
import { FormOrders } from './FormOrders.jsx'
import { useState,useEffect } from 'react'
 import { httpGetProducts } from '../../helpers/api.js'
 const Waiter= ({ token })=> {

    const [products, setProducts] = useState([])

  async function readProducts() {
    setProducts(await httpGetProducts(token));
  }

  useEffect(() => {
    const read = async () => {
      await readProducts();
    };
    read();
  }, )


  return (
    <>

      <NavWaiter />
      <main className='wt-main-container'>
        <section className='wt-products-section'>
          <div className='wt-products_section__buttons'>
            <button className='wt-products-section__button'>Breakfast</button>
            <button className='wt-products-section__button'>Lunch & Dinner</button>
          </div>
          <div className='wt-products-section__content'>
            {products?.map((product) => (
              <main key={product.id} className='card-of-product'>
                  <div className='card-img'>
                    <img src={product.image} alt={`Product ${product.name}`} />
                  </div>  
                  <div className='card-body'> 
                     <h4 className='card-title'>{product.name}</h4>
                     <h6 className='card-text'>{product.price}</h6>
                  </div>
            </main>
            ))}
            </div>
        </section >
         
        <section className='wt-order-section'>
           <FormOrders/>
        </section>
      </main>
    </>
  )
}
export default Waiter