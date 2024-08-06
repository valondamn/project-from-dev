export interface FaqResponse {
  status: string;
  message: string;
}

export interface FaqRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  division: string;
}
