import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon('postgresql://SavingsXpert_owner:Bds6hkqongf2@ep-small-butterfly-a504p85x.us-east-2.aws.neon.tech/Expense-tracker?sslmode=require');
export const db = drizzle(sql,{schema});