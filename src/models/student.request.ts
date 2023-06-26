export interface StudentRequestPayload {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  sent?: boolean;
}
