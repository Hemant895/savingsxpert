"use client"
import React, { useEffect } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react';
import BudgetItem from './BudgetItem'
import { toast } from 'sonner'

function BudgetsList() {
    const [BudgetList,setBudgetList] = useState([])
    const {user}= useUser();
    useEffect(()=>{
        user&&getBudgetList();
    },[user])
    const getBudgetList = async () => {
        try {
            if (!user) return; // Ensure user object is available
    
            const result = await db.select({
                ...getTableColumns(Budgets),
                totalSpend: sql`SUM(CAST(${Expenses.amount} AS NUMERIC))`.mapWith(Number),
                totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number) // Corrected COUNT function
            })
            .from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
            .groupBy(Budgets.id).orderBy(desc(Budgets.id));
            setBudgetList(result)
            
        } catch (error) {
            console.error('Error fetching budget list:', error);
        }
    };
    
  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <CreateBudget refreshdata={()=>{
            getBudgetList()
        }}/>
        {
           
           BudgetList.length>0?BudgetList.map((budget,index)=>(
          <BudgetItem budget={budget}/>
          ))
          :[1,2,3,4,5].map((item,index)=>(
            <div key={index} className='w-full bg-slate-200 rounded-lg h-[150px] animate-pulse'>
            </div>
          ))
        }
        </div>
        
    </div>
  )
}

export default BudgetsList