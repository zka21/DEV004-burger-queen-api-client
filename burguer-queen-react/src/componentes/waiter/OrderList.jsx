 import { useState, useEffect } from "react";
 import { httpGetOrder } from "../../helpers/api.js"
import { NavWaiter } from "./NavWaiter.jsx";

const ListOrders = ({token}) => {
  const [order, setOrder] = useState([]);

    async  function readOrders(){
        setOrder( await httpGetOrder( localStorage.getItem("token")))
      }
    
      useEffect(() => {
        const read = async () => {
            await readOrders();
        };
        read();
      }, [])
return(
<>
<NavWaiter/>
<main className="ordersList-main">
{order?.map((orderlist) => (
<div className="card" key={orderlist.id}>
    <h2>Tarjeta de Pedido</h2>
    <div className="info">
      <strong>Cliente:</strong> {orderlist.client}
    </div>
    <div className="info">
      <strong>Fecha y Hora:</strong> {orderlist.dateEntry}
    </div>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
        </tr>
      </thead>
      <tbody>
        {orderlist.products?.map((product , index )=> (
        <><tr key={index}>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.price}</td>
          </tr></>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td  className="total">Total del Pedido:</td>
          <td className="total">$35.00</td>
        </tr>
      </tfoot>
    </table>
  </div>
))}
</main>

</>

)}

 export default ListOrders;