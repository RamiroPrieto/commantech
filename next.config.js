/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
      },
    env: {
        location: "https://www.google.com/maps/place/Via+di+Salicchi,+361%2F1p,+55100+Lucca+LU/@43.8564069,10.5093756,17z/data=!3m1!4b1!4m5!3m4!1s0x12d583ea3b41f87f:0x80387d423703db77!8m2!3d43.8564069!4d10.5119505",
    }
}

module.exports = nextConfig

