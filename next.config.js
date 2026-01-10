/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ output: "export" ← 絶対に入れない
  serverExternalPackages: ["stripe", "@supabase/supabase-js"],
}

export default nextConfig
