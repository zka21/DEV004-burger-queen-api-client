import { NavWaiter } from './NavWaiter.jsx'
import { FormOrders } from './FormOrders.jsx'

export default function Waiter() {

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
            <div className='wt-card'></div>
            <div className='wt-card'></div>
            <div className='wt-card'></div>
            <div className='wt-card'></div>
            <div className='wt-card'></div>
            <div className='wt-card'></div>
          </div>
        </section >
         
        <section className='wt-order-section'>
           <FormOrders/>
        </section>
      </main>
    </>
  )
}