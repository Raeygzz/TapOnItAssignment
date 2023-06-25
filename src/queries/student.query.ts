import { AppDataSource } from "../configs";
import { StudentEntity } from "../entities";

export class StudentQuery {
  public static loginStudent(student: StudentEntity) {
    return AppDataSource.getRepository(StudentEntity).findOne({
      where: { email: student.email, password: student.password },
    });
  }

  public static addStudent(student: StudentEntity) {
    return AppDataSource.getRepository(StudentEntity).save(student);
  }

  public static findAllStudents() {
    return AppDataSource.getRepository(StudentEntity).find();
  }

  public static findStudentById(id: number) {
    return AppDataSource.getRepository(StudentEntity).findOne({
      where: { id: id },
    });
  }

  public static updateStudentById(id: number, student: StudentEntity) {
    return AppDataSource.getRepository(StudentEntity).update(id, student);
  }
}
