import { ApiError } from "../exeptions/apiError.js";
import { TokenService } from "../service/tokenService.js";

export function authenticate(req, res, next) {
  try {
    const authorizationHeader =  req.headers.authorization;
    if (!authorizationHeader) return next(ApiError.UnautharizdError());
    
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) return next(ApiError.UnautharizdError());
     
    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) return next(ApiError.UnautharizdError());

    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnautharizdError());
  }
} 
