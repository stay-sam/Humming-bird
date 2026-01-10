/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["stripe", "@supabase/supabase-js"],
}

module.exports = nextConfig
