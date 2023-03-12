import { useState, useEffect } from 'react';
import axios from 'axios'

const useDataStore = () => {
    //----------------------------------------------------------------
    //                     Offline data source
    //----------------------------------------------------------------
    const products = [
        { name: "Apples", country: "Italy", cost: 3, instock: 10 },
        { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
        { name: "Beans", country: "USA", cost: 2, instock: 5 },
        { name: "Cabbages", country: "USA", cost: 1, instock: 8 },
    ];

    const [cartItems, setCartItems] = useState([]);
    const [stockItems, setStockItems] = useState(products);
    const [fetchError, setFetchError] = useState("");
    const [url, setUrl] = useState(`Strapi Database Unavailable...`); //http://localhost:1337/api/products

    const addToCart = (index) => {
        //--------------------------------------
        //       Process the Stock Item   
        //--------------------------------------

        //Spread existing arrary for further manupulation
        let xStockItems = [...stockItems];
        const selectedStockItem = stockItems[index];
        // update instock qty
        selectedStockItem.instock = selectedStockItem.instock - 1
        // substitute old object with new
        xStockItems.splice(index, 1, selectedStockItem);
        setStockItems(xStockItems)


        //--------------------------------------
        //       Process the Cart Item   
        //--------------------------------------

        //Spread existing arrary for further manupulation
        let xCartItems = [...cartItems];
        //get matching cartItem in StockItems
        const matchingCartItem = cartItems.find(item => item.name === stockItems[index].name);
        // Increase inCart Qty or add if not in list yet
        if (matchingCartItem === undefined) {
            const newCartItem = {
                name: selectedStockItem.name,
                cost: selectedStockItem.cost,
                inCart: 1
            }
            xCartItems = [...xCartItems, newCartItem]
            setCartItems(xCartItems)
        } else {
            matchingCartItem.inCart = matchingCartItem.inCart + 1
            const indexUpdatedItem = cartItems.findIndex(item => item.name === selectedStockItem.name)
            xCartItems.splice(indexUpdatedItem, 1, matchingCartItem)
            setCartItems(xCartItems)
        }

    };

    const removeOneItemFromCart = (index) => {
        //--------------------------------------
        //       Process the Stock Item   
        //--------------------------------------

        //Spread existing arrary for further manupulation
        let xStockItems = [...stockItems];
        // get matching stockItem in cartItems         
        const matchingStockItem = stockItems.find(item => item.name === cartItems[index].name);
        // update instock qty
        matchingStockItem.instock = matchingStockItem.instock + 1;
        // substitute old stock object with new
        const indexStockItem = stockItems.findIndex(item => item.name === matchingStockItem.name)
        xStockItems.splice(indexStockItem, 1, matchingStockItem);
        setStockItems(xStockItems)


        //--------------------------------------
        //       Process the Cart Item   
        //--------------------------------------

        //Spread existing arrary for further manupulation
        let xCartItems = [...cartItems];
        //get selected cart item
        const matchingCartItem = cartItems.find(item => item.name === cartItems[index].name);
        // update inCart qty
        matchingCartItem.inCart = matchingCartItem.inCart - 1
        // Decrease inCart Qty or remove if 0
        if (matchingCartItem.inCart <= 0) {
            xCartItems.splice(index, 1);
        } else {
            xCartItems.splice(index, 1, matchingCartItem)
        }
        setCartItems(xCartItems)
    };

    const restockProducts = async () => {
        setStockItems(products)
        // try {
        //     const result = await axios(url);
        //     const newArr = [];
        //     result.data.data.forEach(item => {
        //         newArr.push(item.attributes)
        //     })
        //     setStockItems(newArr)
        //     setFetchError("")

        // } catch (error) {
        //     setFetchError('Error code 404 - invalid URL.')
        // }
    }

    // useEffect(() => {
    //     let didCancel = false;
    //     const getProducts = async () => {
    //         try {
    //             const result = await axios(url);
    //             if (!didCancel) {
    //                 console.log('Fetching Product from UseEffect...')
    //                 const newArr = [];
    //                 result.data.data.forEach(item => {
    //                     newArr.push(item.attributes)
    //                 })
    //                 setStockItems(newArr)
    //             }
    //         } catch (error) {
    //             setFetchError('Invalid URL')
    //         }
    //     }
    //     getProducts();
    //     return () => {
    //         didCancel = true;
    //     };
    // }, []);


    return {
        cartItems,
        stockItems,
        url,
        fetchError,
        addToCart,
        removeOneItem: removeOneItemFromCart,
        setUrl,
        restockProducts,
    }
}

export default useDataStore