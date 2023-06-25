export interface StudentRequestPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  accessToken?: string;
  city?: string;
  state?: string;
  zip?: string;
  sent?: boolean;
}
