import express from "express";
const router = express.Router();
import userRouter from "../modules/user/user.routes";
import authRouter from "../modules/auth/auth.routes";
import collegeRouter from "../modules/college/college.routes";

const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/auth",
    route: collegeRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
