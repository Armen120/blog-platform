import { UserService } from "../service/userService.js";

export class UserController {
  static async registration(req, res, next) {
    try {
      const { email, password } = await req.body;
      await UserService.registration(email, password);
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = await req.body;
      const {token,userId} = await UserService.login(email, password);
      res.cookie(userId, token);
      res.status(201).json(token);
    } catch (err) {
      next(err);
    }
  }

  static async logout(req, res, next) {
    try {
      const userId = req.params.userId; 
      res.clearCookie(userId);
      return res.status(201).json("logged out");
    } catch (err) {
      next(err);
    }
  }
}
