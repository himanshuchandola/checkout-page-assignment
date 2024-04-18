export default function robots() {
  const env = process.env.VERCEL_ENV;
  if (env === "production") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
