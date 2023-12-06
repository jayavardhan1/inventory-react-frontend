import {useEffect, useState} from "react";

function Items(props) {
    const setCartSize = props.setCartSize

    const products = [
        {
            name: "Product 1",
            id: 101,
            boughtPrice: 50,
            sellPrice: 70,
            size: "Medium",
            type: "Electronics",
            brand: "BrandA",
            inCart: false,
        },
        {
            name: "Product 2",
            id: 102,
            boughtPrice: 30,
            sellPrice: 45,
            size: "Small",
            type: "Clothing",
            brand: "BrandB",
            inCart: false,
        },
        {
            name: "Product 3",
            id: 103,
            boughtPrice: 20,
            sellPrice: 35,
            size: "Large",
            type: "Accessory",
            brand: "BrandC",
            inCart: false,
        },
        {
            name: "Product 4",
            id: 104,
            boughtPrice: 80,
            sellPrice: 100,
            size: "Large",
            type: "Furniture",
            brand: "BrandD", inCart: false,
        },
        {
            name: "Product 5",
            id: 105,
            boughtPrice: 15,
            sellPrice: 25,
            size: "Small",
            type: "Toy",
            brand: "BrandE",
            inCart: false,
        },
        {
            name: "Product 6",
            id: 106,
            boughtPrice: 60,
            sellPrice: 85,
            size: "Medium",
            type: "Appliance",
            brand: "BrandF", inCart: false,
        },
        {
            name: "Product 7",
            id: 107,
            boughtPrice: 40,
            sellPrice: 55,
            size: "Medium",
            type: "Sporting Goods",
            brand: "BrandG", inCart: false,
        },
        {name: "Product 8", id: 108, boughtPrice: 35, sellPrice: 50, size: "Small", type: "Tool", brand: "BrandH"},
        {
            name: "Product 9",
            id: 109,
            boughtPrice: 100,
            sellPrice: 130,
            size: "Large",
            type: "Technology",
            brand: "BrandI", inCart: false,
        },
        {
            name: "Product 10",
            id: 110,
            boughtPrice: 70,
            sellPrice: 90,
            size: "Extra Large",
            type: "Home Decor",
            brand: "BrandJ", inCart: false,
        }
    ];

    // const [cartitems, setcartitems] = useState([]);

    // const addToCart = (product) => {
    //     const existingProduct = cartitems.find(p => p.id === product.id);
    //     if (existingProduct) {
    //         const newCartItems = cartitems.map(p =>
    //             p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    //         );
    //         setcartitems(newCartItems);
    //         localStorage.setItem('imdb', JSON.stringify(newCartItems));
    //         setCartSize(cartitems.length+1)
    //     } else {
    //         const newCartItems = [...cartitems, { ...product, quantity: 1 }];
    //         setcartitems(newCartItems);
    //         localStorage.setItem('imdb', JSON.stringify(newCartItems));
    //         setCartSize(cartitems.length+1)
    //     }
    // }
    // useEffect(() => {
    //    let  cartitems=JSON.parse(localStorage.getItem('imdb'))||[];
    //    setcartitems(cartitems)
    //
    // },[]);
    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 p-2  ">
                {products.map((product) => {
                    return (<div className="bg-amber-200 rounded m-2 p-2" key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.id}</div>
                        <div>{product.boughtPrice}</div>

                        {/*<div onClick={() => {*/}
                        {/*    addToCart(product)*/}
                        {/*}}*/}
                        <div className=" rounded-md bg-blue-950 text-white p-2 hover:scale-105 ">
                            Add to Cart
                            {/*{cartitems.findIndex(p => p.id === product.id) !== -1 ? "Added" : "Add to Cart"}*/}
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Items;