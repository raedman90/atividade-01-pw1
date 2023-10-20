import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

const users: User[] = [];

function checkExistsUserAccount(request: Request, response: Response, next: NextFunction) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) {
    return response.status(404).json({ error: "User not found" });
  }


  return next();
}

export { checkExistsUserAccount };
