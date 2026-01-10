/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["stripe", "@supabase/supabase-js"],

  // ★ これが最重要
  output: undefined,
}

export default nextConfig
