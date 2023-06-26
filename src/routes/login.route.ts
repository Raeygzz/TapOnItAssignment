import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { StudentQuery } from "../queries";
import { StudentMapper } from "../mappers";
import { StudentService } from "../services";
import { AuthRequestPayload } from "../models";

const LoginRouter = Router();
const SecretKey = process.env.SECRET_KEY ?? "";

LoginRouter.post("/login", async (req: Request, res: Response) => {
  if (!req.body.email && !req.body.password) {
    res.json({
      status: 400,
      message: "Please provide valid inputs",
      data: null,
    });
    return;
  }

  let data = await StudentQuery.loginStudent(req.body);

  if (!data) {
    res.json({ status: 400, message: "Invalid login / password", data: null });
    return;
  }

  if (data.email === req.body.email && data.password === req.body.password) {
    res.json(await StudentService.loginStudent(req.body as AuthRequestPayload));

    // jwt.sign(
    //   { data },
    //   SecretKey,
    //   { expiresIn: "2100s" },
    //   async (error, token) => {
    //     if (error) {
    //       res.json({ status: 400, message: error, data: null });
    //       return;
    //     }

    //     let obj = {
    //       accessToken: token,
    //       email: data?.email!,
    //       firstName: data?.firstName,
    //       lastName: data?.lastName,
    //       city: data?.city,
    //       state: data?.state,
    //       zip: data?.zip,
    //       sent: data?.sent,
    //     };

    //     await StudentQuery.updateStudentById(
    //       data?.id!,
    //       StudentMapper.requestToEntityMapper(obj)
    //     );

    //     res.json({
    //       id: data?.id,
    //       ...obj,
    //     });
    //   }
    // );
  } else {
    res.json({ status: 400, message: "Invalid login / password", data: null });
  }
});

export { LoginRouter };
