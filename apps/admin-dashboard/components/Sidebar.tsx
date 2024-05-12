"use client"

import { Button } from "@repo/ui/button";
import { LayoutDashboard, Mail } from "lucide-react"



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@repo/ui/dropdownMenu"
import axios, { AxiosResponse } from "axios";

import { NAV_LINKS } from "../constants";
import { useEffect, useState } from "react";

import { error, info } from "@repo/logs/logs";
import Link from "next/link";

interface Category {
    id: number;
    name: string;
    pic: string
}

export default function Sidebar() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {

        
        const fetchCategories = async () => {
            console.log("I am getting called")
            try {
                const response: AxiosResponse<Category[]> = await axios.get('http://localhost:1337/api/categories/getCategories');
                info("the response of categories is", response);
                if (response.status == 200) {
                    console.log("the response.data is ", response.data.data);
                    setCategories(response.data.data);
                }
                console.log("the categories after successful response from the backend", categories);
            }
            catch (err: any) {
                error("Error in getting the categories", err);
            }


        }

        fetchCategories();
    }, []);


    console.log("the categories are", categories);
    return (
        <>
            <div className="bg-white p-10 flex flex-col gap-y-4">
                <div className="">
                    <h1>logo</h1>
                </div>

                <div className="flex flex-col items-center gap-y-2">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <Button className="w-40 h-15 rounded-md  focus:bg-blue-90 focus:rounded-xl focus:text-white">
                                <link.logo className="mr-1 h-4 w-5 "/>  {link.name}
                            </Button>
                        </Link>

                    ))}
                </div>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="bg-none focus:outline-none">Categories</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {categories.map((category) => (
                                <DropdownMenuItem key={category.id}>{category.name}</DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </>
    )
}