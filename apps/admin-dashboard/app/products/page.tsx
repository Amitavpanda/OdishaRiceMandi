import { Button } from '@repo/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card'
import { BadgePlus } from 'lucide-react'
import React from 'react'
import Products from '../../components/Products';

function Product() {
  return (
    <div className='flex flex-col bg-gray-10 '>
      {/* 1st portion */}
      <div className='flex flex-row items-center justify-between p-20'>
        <h2 className='bold-24'>Products</h2>
        <Button className="w-40 h-15 rounded-md bg-blue-90 text-white rounded-xl">
          <BadgePlus className="mr-1 h-4 w-5 " /> Add New Product
        </Button>
      </div>

      {/* 2nd portion */}

      <div className='flex flex-row flex-wrap p-10'>
        <Products />
      </div>

    </div>
  )
}

export default Product