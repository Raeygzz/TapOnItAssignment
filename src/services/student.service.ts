import { StudentQuery } from "../queries";
import { AuthMapper, StudentMapper } from "../mappers";
import {
  AuthRequestPayload,
  StudentRequestPayload,
  StudentResponsePayload,
} from "../models";

export class StudentService {
  public static async loginStudent(requestPayload: AuthRequestPayload) {
    let data = await StudentQuery.loginStudent(requestPayload);

    if (data) {
      await StudentQuery.loginStudent(
        AuthMapper.requestToEntityMapper(requestPayload)
      );

      return data;
    } else {
      return "Invalid login / password";
    }
  }

  // add student
  public static async addStudent(requestPayload: StudentRequestPayload) {
    await StudentQuery.addStudent(
      StudentMapper.requestToEntityMapper(requestPayload)
    );

    return "sucess";
  }

  // find all student
  public static async findAllStudents() {
    let data: StudentResponsePayload[] = (
      await StudentQuery.findAllStudents()
    ).map((student) => {
      return StudentMapper.entityToResponseMapper(student);
    });
    return data;
  }

  public static async findStudentById(id: number) {
    let studentEntity = await StudentQuery.findStudentById(id);

    if (studentEntity) {
      let bookResponse = StudentMapper.entityToResponseMapper(studentEntity);

      return bookResponse;
    } else {
      return "Book Does Not Exsist";
    }
  }

  public static async updateStudentById(id: number) {
    let studentEntity = await StudentQuery.findStudentById(id);

    if (studentEntity) {
      studentEntity.sent = true;

      if (studentEntity.firstName != undefined) {
        await StudentQuery.updateStudentById(
          id,
          StudentMapper.requestToEntityMapper(studentEntity)
        );

        return "sucess";
      }
    }

    return "Student Does Not Exsist";
  }
}
