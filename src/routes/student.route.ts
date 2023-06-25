import { Router, Request, Response } from "express";
import { StudentService } from "../services";
import { StudentRequestPayload } from "../models";

const StudentRouter = Router();

StudentRouter.post("/add", async (req: Request, res: Response) => {
  res.json(await StudentService.addStudent(req.body as StudentRequestPayload));
});

StudentRouter.get("/findAll", async (req: Request, res: Response) => {
  res.json(await StudentService.findAllStudents());
});

StudentRouter.get("/findById/:id", async (req: Request, res: Response) => {
  res.json(await StudentService.findStudentById(Number(req.params.id)));
});

StudentRouter.get("/updateById/:id", async (req: Request, res: Response) => {
  res.json(await StudentService.updateStudentById(Number(req.params.id)));
});

export { StudentRouter };
