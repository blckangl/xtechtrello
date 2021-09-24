const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://xtechtrello-60q48uim1-dhiakahri.vercel.app";
