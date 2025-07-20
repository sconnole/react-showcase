export type Role = 'admin' | 'member';

export type User = {
  username: string;
  password?: string;
  role: Role;
};
