import {useEffect, useState} from "react";

function Bill() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('imdb')) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.sellPrice * (item.quantity || 1)), 0);
    };

    return (
        <div className=" w-[80vw] mx-auto  mt-2">
            <h2>Invoice</h2>
            <p>Invoice No: 123</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <table className="border-2  min-w-full my-5">
                <thead className="border-b-2">
                <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item, index) => (
                    <tr key={index}>
                        <td className=" border-r-2">
                            <span className="mx-auto">{index + 1}</span>
                        </td>

                        <td className=" border-r-2">
                            <span className="mx-auto">{item.name}</span>
                        </td>
                        <td className=" border-r-2"><span className="mx-auto">{item.quantity || 1}</span></td>

                        <td className=" border-r-2"><span
                            className="mx-auto">${item.sellPrice * (item.quantity || 1)}</span>
                        </td>

                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td>${calculateTotal()}</td>
                    {/* Display total cost */}
                </tr>
                </tfoot>
            </table>
            <button
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => window.print()}>Print Invoice
            </button>
        </div>
    );
}

export default Bill;
