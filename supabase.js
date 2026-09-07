const SUPABASE_URL = "https://blwdcxjucwcuiuplfblk.supabase.co";
const SUPABASE_KEY = "sb_publishable_mejWjwZhb0VFd9jm7ymL4w_BnH8eWt0";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// در دسترس بودن برای index.html
window.supabaseClient = supabaseClient;

console.log("✅ Supabase آماده است:", supabaseClient);