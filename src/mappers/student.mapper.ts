import { StudentEntity } from "../entities";
import { StudentRequestPayload, StudentResponsePayload } from "../models";

export class StudentMapper {
  public static requestToEntityMapper(requestPayload: StudentRequestPayload) {
    let studentEntity = new StudentEntity();

    studentEntity.email = requestPayload.email;
    studentEntity.password = requestPayload.password;
    studentEntity.firstName = requestPayload.firstName;
    studentEntity.lastName = requestPayload.lastName;
    studentEntity.city = requestPayload.city;
    studentEntity.state = requestPayload.state;
    studentEntity.zip = requestPayload.zip;
    studentEntity.sent = requestPayload.sent;

    return studentEntity;
  }

  public static entityToResponseMapper(
    entity: StudentEntity
  ): StudentResponsePayload {
    let studentResponse: StudentResponsePayload = {
      id: entity.id ?? 0,
      firstName: entity.firstName ?? "",
      lastName: entity.lastName ?? "",
      city: entity.city ?? "",
      state: entity.state ?? "",
      zip: entity.zip ?? "",
      sent: entity.sent ?? false,
    };

    return studentResponse;
  }
}
