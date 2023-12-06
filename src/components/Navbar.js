import {Link} from "react-router-dom";
import {useState} from "react";
function Navbar(props){
    const cartSize=props.cartSize;
    return (
        <div className="flex w-100vw border-b-4">
                <div className="text-xl p-5">Bill Made Easy</div>
                <div  className="text-xl ml-auto my-auto mr-4">Bill
                    <span className="bg-purple-100 text-purple-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 mb-5">
                        {cartSize}
                    </span>
                </div>
        </div>
    )
}
export default Navbar;