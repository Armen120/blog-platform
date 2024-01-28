import jwt from "jsonwebtoken";

export class TokenService {
  static generateTokens(user) {
    const payload = {
      _id :user._id,
      email :user.email,
    };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_ACTIVE_TIME,
    });
    return {
      accessToken
    };
  }

  static validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, {
        ignoreExpiration: true,
      });
    } catch (error) {
      console.log(error.name);
      return null;
    }
  }
}
