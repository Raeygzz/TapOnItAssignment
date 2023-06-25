import { StudentQuery } from "../queries";
import { StudentMapper } from "../mappers";
import { StudentRequestPayload, StudentResponsePayload } from "../models";

export class StudentService {
  public static async addStudent(requestPayload: StudentRequestPayload) {
    await StudentQuery.addStudent(
      StudentMapper.requestToEntityMapper(requestPayload)
    );

    return "sucess";
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
      return "Book Does Not Exsist";
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

      return "sucess";
    }

    return "Student Does Not Exsist";
  }
}
