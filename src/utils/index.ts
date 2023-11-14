import bcryptjs from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

const comparePassword = async (password: string, hash: string) => {
  return await bcryptjs.compare(password, hash);
};

const generateJwt = (userId: number) => {
  const payload = { user: userId };
  const secretKey: Secret = process.env.JWT_SECRET_KEY!;
  return jwt.sign(payload, secretKey);
};

const encryptPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};

export { comparePassword, generateJwt, encryptPassword };
