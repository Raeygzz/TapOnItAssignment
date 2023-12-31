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

      return {
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        state: data.state,
        zip: data.zip,
        sent: data.sent,
      };
    } else {
      return "Invalid login / password";
    }
  }

  public static async addStudent(requestPayload: StudentRequestPayload) {
    await StudentQuery.addStudent(
      StudentMapper.requestToEntityMapper(requestPayload)
    );

    return "Sucess";
  }

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
      return "Student Does Not Exsist";
    }
  }

  public static async updateStudentById(id: number) {
    let studentEntity = await StudentQuery.findStudentById(id);

    if (studentEntity) {
      studentEntity.sent = true;

      await StudentQuery.updateStudentById(
        id,
        StudentMapper.requestToEntityMapper(studentEntity)
      );

      return "Sucess";
    }

    return "Student Does Not Exsist";
  }
}
