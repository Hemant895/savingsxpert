import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Budgets = pgTable('budgets',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    icon:varchar('icon'),
    createdBy:varchar('createdxBy').notNull()
})

export const Expenses = pgTable('expenses',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    budgetId:integer('budgetId').references(()=>Budgets.id),
    createdAt:varchar('createdxAt').notNull()
})