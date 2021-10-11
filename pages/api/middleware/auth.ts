import jwt from "jsonwebtoken";

const KEY = process.env.JWT_KEY ? process.env.JWT_KEY : "";

export function verifyToken(jwtToken: string | undefined) {
  if (!jwtToken) {
    return null;
  }
  try {
    return jwt.verify(jwtToken, KEY);
  } catch (e) {
    console.log("error:", e);
    return null;
  }
}
