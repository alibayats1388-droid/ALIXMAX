const SUPABASE_URL = "https://blwdcxjucwcuiuplfblk.supabase.co";
const SUPABASE_KEY = "sb_publishable_mejWjwZhb0VFd9jm7ymL4w_BnH8eWt0";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase آماده است:", supabaseClient);
async function testPosts() {
    const { data, error } = await supabaseClient
        .from("posts")
        .select("*");

    if (error) {
        console.error("خطا در دریافت posts:", error);
        return;
    }

    console.log("Posts:", data);
}

testPosts();
async function loadPosts() {
    const { data, error } = await supabaseClient
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("خطا:", error);
        return;
    }

    const container = document.getElementById("posts-container");

    container.innerHTML = "";

    data.forEach(post => {
        const postElement = document.createElement("article");
        postElement.className = "post-card";

        postElement.innerHTML = `
            ${post.image_url ? `<img src="${post.image_url}" alt="${post.title}">` : ""}
            
            <div class="post-content">
                <span class="post-type">${post.type}</span>
                <h2>${post.title}</h2>
                <p>${post.description}</p>
            </div>
        `;

        container.appendChild(postElement);
    });
}

loadPosts();