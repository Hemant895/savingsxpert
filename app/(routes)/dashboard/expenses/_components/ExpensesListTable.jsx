import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ExpensesListTable({ expensesList,refreshData }) {
    //  const deleteExpense= async(expense)=>{
    //   const result = await db.delete(expense)
    //   .where(eq(Expenses.id,expense.id));
    //   if(result){
    //     toast('Expenses Deleted!')
    //     refreshData()
    //   }
    //  }
    const deleteExpense = async (expense) => {
      try {
          const result = await db.delete(Expenses)
              .where(eq(Expenses.id, expense.id))
              .execute();
  
          if (result) {
              toast('Expense Deleted!');
              refreshData();
          }
      } catch (error) {
          console.error('Error deleting expense:', error);
          // Handle the error appropriately (e.g., show error message to the user)
      }
  };
  
  return (
    <div className="mt-3 rounded-lg  overflow-hidden">
      <div className="grid grid-cols-4 bg-slate-200 p-2 ">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>

     
        {
            expensesList.map((expenses,index)=>(
            <div className="grid grid-cols-4 bg-slate-300 p-2 " key={index}>
           <h2 >{expenses.name}</h2>
           <h2>{expenses.amount}</h2>
           <h2>{expenses.createdAt}</h2>
           <h2><Trash className="text-red-600 cursor-pointer" 
           onClick={()=>{
            deleteExpense(expenses);
           }}/></h2>
           </div>
            ))
        }
        
     
    </div>
  );
}

export default ExpensesListTable;
