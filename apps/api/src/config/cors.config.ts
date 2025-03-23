import { CorsOptions } from "cors";
import { envConfig } from "./env.config";
import { ApiError } from "../utils/api-error";
import { StatusCodes } from "http-status-codes";


export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || envConfig.allowedOrigins.includes(origin)) {
      callback(null, true); 
    } else {
      console.log(envConfig.allowedOrigins)
      console.log("corssssssssss");
      console.log(origin)
      callback(new ApiError("Not allowed by CORS",StatusCodes.FORBIDDEN)); 
    }
  },
  optionsSuccessStatus: StatusCodes.OK, 
};


