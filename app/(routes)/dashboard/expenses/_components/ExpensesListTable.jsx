import { Trash } from 'lucide-react'
import React from 'react'

function ExpensesListTable({expensesList}) {
  return (
    <div className='mt-3'>
        <div>
            <h2>Name</h2>
            <h2>Amount</h2>
            <h2>Date</h2>
            <h2>Action</h2>
        </div>
        
      
            <div className='grid grid-cols-4 bg-slate-200 p-2'>
            <h2>
                {item.name}
            </h2>
            <h2>
                {item.amount}
            </h2>
            
            
        </div>
        
       
       
    </div>
  )
}

export default ExpensesListTable