"use client"
import React, { useEffect } from 'react'
import Sidenav from './_components/Sidenav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'


function Dashboardlayout({children}) {

    const {user} = useUser();
    const route = useRouter()
    useEffect(()=>{
        user&&checkUserBudgets();
    },[user]);
    const checkUserBudgets= async  ()=>{
        const result= await db.select().from(Budgets)
        .where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))
        console.log(result)
        if(result.length == 0){
        route.replace('/dashboard/budgets')
        }
    }
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block '>
            <Sidenav/>
        </div>
    <div className='md:ml-64'>
        <DashboardHeader/>
    {children}
    </div>
    </div>
  )
}

export default Dashboardlayout