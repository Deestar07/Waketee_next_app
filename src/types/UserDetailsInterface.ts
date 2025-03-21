export interface WakateeUserDetails {
  ID: number;
  username: string;
  displayName: string;
  email: string;
  gender?: 'male' | 'female';
  refreshToken?: string;
  roles?: string[];
  token?: string;
  title?: string;
}
