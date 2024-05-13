import React from 'react'
import { DataTable } from '../../components/ordersComponent/data-table'
import Orders from '../../components/Orders';

function Order() {
  return (
    <div className='flex flex-col bg-gray-10 p-20 gap-y-5'>
        <h2 className='bold-24'>Orders</h2>

        {/* orders table */}
        <div>
            <Orders />
        </div>
    </div>
  )
}

export default Order;