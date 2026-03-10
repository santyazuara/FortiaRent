import { Client } from 'pg';

const connectionString = "postgresql://postgres.lpantvmighleaqknpgvw:Sa17515598.Sa17515598.Sa17515598.@aws-0-us-west-2.pooler.supabase.com:6543/postgres";

async function run() {
    console.log("Testing connection to Supabase...");
    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log("✅ Successfully connected to Supabase!");
        const res = await client.query('SELECT NOW()');
        console.log("Database time:", res.rows[0].now);
    } catch (err: any) {
        console.error("❌ Connection failed:");
        console.error("Error message:", err.message);
        if (err.code) console.error("Error code:", err.code);
    } finally {
        await client.end();
    }
}

run();
