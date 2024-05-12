import { Button } from '@repo/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card'
import { BadgePlus } from 'lucide-react'
import React from 'react'
import './style.css';

function Products() {
  return (
    <div className='flex flex-col bg-gray-10 min-h-screen'>
      {/* 1st portion */}
      <div className='flex flex-row items-center justify-between p-20'>
        <h2>Products</h2>
        <Button className="w-40 h-15 rounded-md">
          <BadgePlus className="mr-1 h-4 w-5 " /> Add New Product
        </Button>
      </div>

      {/* 2nd portion */}

      <div className='flex flex-row flex-wrap p-10'>
        <Card>
          <CardContent className='p-5 flex flex-col gap-y-5'>
            {/* 1st wor */}
            <div className='flex flex-row justify-between'>

              <div className='flex flex-row items-center justify-center'>
                <img src='ladskf' alt='pic of the product' />
                <div className='flex flex-col'>
                  <div>
                    <h3>name of the product</h3>
                    <p>category of the product</p>
                  </div>
                  <h2>price of the product</h2>
                </div>
              </div>

              <div>Avaliable or not</div>

            </div>

            {/* 2nd row */}
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col'>
                <h3>Description</h3>
                <p>description of the product</p>
              </div>
              <p>Is special product or not</p>
            </div>

            {/* 3rd row */}
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-between'>
                <h3>Sales</h3>
                <p>no of sales of this product</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h3>Remaining Products</h3>
                <p>no. of remaining products</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default Products