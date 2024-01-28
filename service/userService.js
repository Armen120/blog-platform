import userModel from "../models/userModel.js";
import * as bcrypt from "bcrypt";
import { ApiError } from "../exeptions/apiError.js";
import { TokenService } from "./tokenService.js";

export class UserService {
  static async registration(email, password) {
    const candita = await userModel.findOne({ email: email });
    if (candita) throw ApiError.BadRequest(`email ${email} also created`);

      const hashPassword = await bcrypt.hash(password, 3);
      console.log(hashPassword);
    
        const user = await userModel.create({
          email,
          password: hashPassword
        });
       
      return user;
    
   
  }

  static async login(email, password) {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    if (!user) throw ApiError.BadRequest(`Incorect ${email}!`);

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) throw ApiError.BadRequest("Incorect password");

    const token = TokenService.generateTokens(user);
    console.log(token);
    return {
      token,
      userId :user._id
    };
  }
}
