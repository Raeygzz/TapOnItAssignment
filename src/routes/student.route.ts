import { Router, Request, Response } from "express";
import { isEmpty } from "../utils";
import { StudentService } from "../services";
import { StudentRequestPayload } from "../models";

const StudentRouter = Router();

StudentRouter.post("/add", async (req: Request, res: Response) => {
  if (isEmpty(req.body)) {
    res.json({ status: 400, message: "post data are invalid", data: null });
    return;
  }

  const message = await StudentService.addStudent(
    req.body as StudentRequestPayload
  );

  res.json({ status: 200, message: message, data: null });
});

StudentRouter.get("/findAll", async (req: Request, res: Response) => {
  const data = await StudentService.findAllStudents();
  res.json({ status: 200, message: "Success", data: data });
});

StudentRouter.get("/findById/:id", async (req: Request, res: Response) => {
  const data = await StudentService.findStudentById(Number(req.params.id));
  res.json({ status: 200, message: "Success", data: data });
});

StudentRouter.get("/updateById/:id", async (req: Request, res: Response) => {
  const data = await StudentService.updateStudentById(Number(req.params.id));
  res.json({ status: 200, message: "Success", data: data });
});

export { StudentRouter };
