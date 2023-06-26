import { StudentEntity } from "../entities";
import { AuthRequestPayload, AuthResponsePayload } from "../models";

export class AuthMapper {
  public static requestToEntityMapper(requestPayload: AuthRequestPayload) {
    let authEntity = new StudentEntity();

    authEntity.email = requestPayload.email;
    authEntity.password = requestPayload.password;

    return authEntity;
  }

  public static entityToResponseMapper(
    entity: StudentEntity
  ): AuthResponsePayload {
    let studentResponse: AuthResponsePayload = {
      id: entity.id ?? 0,
      email: entity.email ?? "",
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
