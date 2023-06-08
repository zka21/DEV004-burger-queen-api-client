export const FormOrders = () => {
    return (
        <>
            <form >
                <label htmlFor="">Custumer</label>
                <input type="text" name="" id="" />
                <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> <img src="" alt="" /></th>
                            <th> <h5>$3</h5></th>
                            <th>2</th>
                            <th>
                                <button>less</button>
                                <button>more</button>
                                <button>cancel</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
                </div>
                <p>total:</p>
                <button type="submit">Send the order</button>
            </form>

        </>
    )
}