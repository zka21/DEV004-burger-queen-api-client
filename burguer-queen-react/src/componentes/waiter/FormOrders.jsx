export const FormOrders = () => {
    return (
        <><form className="wt-orders-table">
        <label htmlFor="" className="wt-orders-table__label">Customer</label>
        <input type="text" name="" id="" className="wt-orders-table__input" />
        <div className="wt-orders-table__table-container">
          <table className="wt-orders-table__table">
            <thead>
              <tr className="wt-orders-table__row">
                <th className="wt-orders-table__heading">Product</th>
                <th className="wt-orders-table__heading">Price</th>
                <th className="wt-orders-table__heading">Amount</th>
                <th className="wt-orders-table__heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="wt-orders-table__row">
                <td className="wt-orders-table__cell">
                  <img src="" alt="" className="wt-orders-table__image" />
                </td>
                <td className="wt-orders-table__cell">
                  <h5 className="wt-orders-table__price">$3</h5>
                </td>
                <td className="wt-orders-table__cell">2</td>
                <td className="wt-orders-table__cell">
                  <button className="wt-orders-table__button">less</button>
                  <button className="wt-orders-table__button">more</button>
                  <button className="wt-orders-table__button">cancel</button>
                </td>
              </tr>
              <tr className="wt-orders-table__row">
                <td className="wt-orders-table__cell">
                  <img src="" alt="" className="wt-orders-table__image" />
                </td>
                <td className="wt-orders-table__cell">
                  <h5 className="wt-orders-table__price">$3</h5>
                </td>
                <td className="wt-orders-table__cell">2</td>
                <td className="wt-orders-table__cell">
                  <button className="wt-orders-table__button">less</button>
                  <button className="wt-orders-table__button">more</button>
                  <button className="wt-orders-table__button">cancel</button>
                </td>
              </tr>
              <tr className="wt-orders-table__row">
                <td className="wt-orders-table__cell">
                  <img src="" alt="" className="wt-orders-table__image" />
                </td>
                <td className="wt-orders-table__cell">
                  <h5 className="wt-orders-table__price">$3</h5>
                </td>
                <td className="wt-orders-table__cell">2</td>
                <td className="wt-orders-table__cell">
                  <button className="wt-orders-table__button">less</button>
                  <button className="wt-orders-table__button">more</button>
                  <button className="wt-orders-table__button">cancel</button>
                </td>
              </tr>
              <tr className="wt-orders-table__row">
                <td className="wt-orders-table__cell">
                  <img src="" alt="" className="wt-orders-table__image" />
                </td>
                <td className="wt-orders-table__cell">
                  <h5 className="wt-orders-table__price">$3</h5>
                </td>
                <td className="wt-orders-table__cell">2</td>
                <td className="wt-orders-table__cell">
                  <button className="wt-orders-table__button">less</button>
                  <button className="wt-orders-table__button">more</button>
                  <button className="wt-orders-table__button">cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="wt-orders-table__total">total:</p>
        <button type="submit" className="wt-orders-table__submit-button">Send the order</button>
      </form>
        </>
    )
}