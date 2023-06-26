import { Router, Request, Response } from "express";
import { StudentService } from "../services";
import { StudentRequestPayload } from "../models";
import { isEmpty } from "../utils";

const StudentRouter = Router();

StudentRouter.post("/add", async (req: Request, res: Response) => {
  if (isEmpty(req.body)) {
    res.json({ status: 400, message: "post data are invalid", data: null });
    return;
  }

  // res.json(await StudentService.addStudent(req.body as StudentRequestPayload));

  const message = await StudentService.addStudent(
    req.body as StudentRequestPayload
  );

  res.json({ status: 200, message: message, data: null });
});

StudentRouter.get("/findAll", async (req: Request, res: Response) => {
  // res.json(await StudentService.findAllStudents());

  const data = await StudentService.findAllStudents();
  res.json({ status: 200, message: "Success", data: data });
});

StudentRouter.get("/findById/:id", async (req: Request, res: Response) => {
  // res.json(await StudentService.findStudentById(Number(req.params.id)));

  const data = await StudentService.findStudentById(Number(req.params.id));
  res.json({ status: 200, message: "Success", data: data });
});

StudentRouter.get("/updateById/:id", async (req: Request, res: Response) => {
  const data = await StudentService.updateStudentById(Number(req.params.id));
  res.json({ status: 200, message: "Success", data: data });
  // res.json(await StudentService.updateStudentById(Number(req.params.id)));
});

export { StudentRouter };
