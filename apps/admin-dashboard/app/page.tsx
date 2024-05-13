


import Image from "next/image";

import styles from "./page.module.css";
import { Button } from "@repo/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card"

import { DataTable } from "../components/ordersComponent/data-table";
import { columns, Order } from "../components/ordersComponent/columns";
import { BadgeDollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { error, info } from "@repo/logs/logs";
import RecentOrders from "../components/RecentOrders";







export default async function Page() {


  return (
    <>
      <div className="bg-gray-10 p-20">

        {/* 1st portion */}
        <div>
          <h1 className="bold-24">Dashboard</h1>
        </div>

        {/* 2nd portion */}
        <div className="flex flex-row items-center justify-between">

          {/* first col */}
          <div>
            <Card className="rounded-xl bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-[500]">Best Sellers</CardTitle>
                <CardDescription className="text-wrap ">These are the products which are giving good sales right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">

                  <div className="flex flex-row items-center justify-between">

                    {/* 1st col */}
                    <div className="flex flex-row gap-3">
                      <img src="sfs" alt="image" />
                      <div className="flex flex-col">
                        <h2>name of the product</h2>
                        <p>price</p>
                      </div>
                    </div>

                    {/* 2nd col */}
                    <div className="flex flex-col items-end">
                      <h2>profit</h2>
                      <p>no of sales</p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* 2nd col */}
          <div className="flex flex-col gap-y-5">
            {/* 1st row */}
            <Card className="rounded-xl bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="bold-20">Total Orders</CardTitle>
                <CardDescription>
                  <div className="flex flex-row items-center justify-between">
                    {/* 1st col */}
                    <div className="flex flex-row items-center gap-3">
                      <BadgeDollarSign />
                      <p>Rs 18192</p>
                    </div>

                    {/* 2nd col */}
                    <div>1231</div>

                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
            {/* 2nd row */}
            <Card className="rounded-xl bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="bold-20">Total Sales in this month</CardTitle>
                <CardDescription>
                  <div className="flex flex-row items-center justify-between">
                    {/* 1st col */}
                    <div className="flex flex-row items-center gap-3">
                      <BadgeDollarSign />
                      <p>Rs 18192</p>
                    </div>

                    {/* 2nd col */}
                    <div>1231</div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>


        </div>

        {/* recent orders */}
        <div className="flex flex-col">
          <h2 className="bold-24">Recent Orders</h2>
          <RecentOrders />
        </div>

      </div>

    </>
  );
}
