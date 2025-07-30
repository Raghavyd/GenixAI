import 'dotenv/config'; // ✅ Automatically loads .env
import { neon } from '@neondatabase/serverless';



const sql = neon(process.env.DATABASE_URL); // Don't wrap in `${}` unnecessarily

export default sql;
