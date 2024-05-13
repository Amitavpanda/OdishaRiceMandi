"use client"

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { error, info } from "@repo/logs/logs";
import { Card, CardContent } from "@repo/ui/card";
import { Category } from "./Sidebar";
import { DataTable } from "./productsComponent/data-table";
import { columns } from  "./productsComponent/columns";

interface Product {
    id: string,
    name: string,
    category : Category,
    categoryId: string,
    isSpecialProduct: boolean,
    productPic: string,
    price : number,
    quantity : number,
    reviews : number,
    isAvailable : boolean
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {

        console.log("I am getting called")
        const fetchProducts = async () => {

            try {
                const response: AxiosResponse<{ data: Product[] }> = await axios.get('http://localhost:1337/api/products/getProducts');
                info("the response of Products is", response);
                if (response.status == 200) {
                    console.log("the response.data is ", response.data.data);
                    setProducts(response.data.data);
                }
                console.log("the Products after successful response from the backend", products);
            }
            catch (err: any) {
                error("Error in getting the Products", err);
            }


        }

        fetchProducts();
    }, [])



    return (
       <DataTable columns={columns} data={products}/>
    )

}
