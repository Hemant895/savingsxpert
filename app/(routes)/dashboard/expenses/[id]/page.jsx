'use client'
import { db } from '@/utils/dbConfig'
import React, { useState,useEffect } from 'react'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import BudgetItem from '../../budgets/_componets/BudgetItem'
import AddExpenses from '../_components/AddExpenses'
import ExpensesListTable from '../_components/ExpensesListTable'
function Expensesscreen({params}) {
    const [Budgetinfo,setBudgetinfo] = useState([]);
    const [expensesList,setExpenseslist] = useState([]);
    const {user}= useUser();
    useEffect(()=>{
        user&&getBudgetInfo();
        getExpensesList();
    },[user])
    const getBudgetInfo = async ()=>{
        const result = await db.select({
            ...getTableColumns(Budgets),
            totalSpend: sql`SUM(CAST(${Expenses.amount} AS NUMERIC))`.mapWith(Number),
            totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number) // Corrected COUNT function
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .where(eq(Budgets.id,params.id))
        .groupBy(Budgets.id).orderBy(desc(Budgets.id));
        setBudgetinfo(result[0])
        console.log("budgets info",result)
    }
    const getExpensesList= async ()=>{
        const result = await db.select().from(Expenses)
        .where(eq(Expenses.budgetId,params.id)).orderBy(desc(Expenses.id));
        setExpenseslist(result);
        console.log(result);
    }
  return (
    <div className='p-5'>
        <h2 className='font-bold text-2xl'>MyExpenses</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
            {
               Budgetinfo?<BudgetItem
            budget={Budgetinfo}
            />
            :<div className='h-[150px] bg-slate-300 w-full rounded-lg animate-pulse'>
            </div>
            }
            <AddExpenses budgetId={params.id}
             refreshdata={()=>{
                getBudgetInfo();
             }}
            />
        </div>
        <div className='mt-4'>
            <h2 className='font-bold text-lg'>Latest Expenses</h2>
            <ExpensesListTable ExpensesList={expensesList}/>
        </div>
    </div>
  )
}

export default Expensesscreen