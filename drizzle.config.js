/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    driver: 'pg',
    dbCredentials: {
      connectionString: 'postgresql://SavingsXpert_owner:Bds6hkqongf2@ep-small-butterfly-a504p85x.us-east-2.aws.neon.tech/Expense-tracker?sslmode=require',
    }
  };