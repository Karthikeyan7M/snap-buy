import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  }); //token created
  //set jwt as http only cookie ,cookie's name is setted as jwt
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", //need https only during production(usage)
    samesite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  }); //maxage should be entered in millisec};
};
export default generateToken;
