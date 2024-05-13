"use client"

import { useEffect, useState } from "react";
import { columns } from "./ordersComponent/columns";
import { DataTable } from "./ordersComponent/data-table";
import axios, { AxiosResponse } from "axios";
import { error, info } from "@repo/logs/logs";


interface Order {
    id : string
    name: string;
    phoneNumber: string
    address : string
    productsOrdered : string[]
    orderStatus : string
  }

export default  function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);


    useEffect(() => {

        console.log("I am getting called")
        const fetchOrders = async () => {
    
            try {
                const response: AxiosResponse<{ data: Order[] }> = await axios.get('http://localhost:1337/api/orders/getOrders');
                info("the response of orders is", response);
                if (response.status == 200) {
                    console.log("the response.data is ", response.data.data);
                    setOrders(response.data.data);
                }
                console.log("the orders after successful response from the backend", orders);
            }
            catch (err: any) {
                error("Error in getting the orders", err);
            }
    
    
        }
    
        fetchOrders();
    }, [])
    


    return(
        <DataTable columns={columns} data={orders} />
    )
    
}
