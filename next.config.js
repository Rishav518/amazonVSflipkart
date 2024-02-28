/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
    images: {
      domains: ["source.unsplash.com",
       "dummyimage.com", 
       "source.unsplash.com/random", 
       "img.freepik.com",
        "images.pexels.com",
         "tailwindcss.com", 
         "www.esearchlogix.com", 
         "webconsulting.ie", 
         "img.freepik.com",
        "www.digitalocean.com",
        "landings-cdn.adsterratech.com"
      ],
    },
  
}

module.exports = nextConfig
