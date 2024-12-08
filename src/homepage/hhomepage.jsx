import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

const hhomepage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm,setSearchTerm] = useState(null)
    const [pageSize,setPageSize] = useState(10)

    const getProduct = async () => {
        {
            const response = await fetch(searchTerm ? `http://localhost:3000/api/?searchTerm=${searchTerm}&pageSize=${pageSize}` : `http://localhost:3000/api/products?pageSize=${pageSize}`);
            const data = await response.json();
            setProducts(data.products);
        } 
    };
    useEffect(() => {
        getProduct();
    }, [searchTerm,pageSize]); 

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='grid grid-cols-3 gap-10 p-10'>
                {
                    products?.map(product => <ProductCard product={product} />)
                }
                <button onClick={() => {
                    setPageSize(prevState => prevState + 5)
                }} className='bg-red-500 text-white px-5 py-3 w-fit col-span-3 justify-self-center text-lg'>View More</button>
            </div>
        </>
    )
};

export default hhomepage;
