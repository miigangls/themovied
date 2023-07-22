export interface FlashMessage {
  message: any;
  type: string;
}

export interface AuthentificationData {
  jwt: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}