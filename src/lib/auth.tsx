import { User, Role } from "@/types/user";

const STORAGE_KEY = 'auth_user';
const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'member', password: 'member', role: 'member' },
];


export function getUser(): User | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function login(username: string, password: string): User | null {
  const match = users.find((u) => u.username === username && u.password === password);
  if (match) {
    const user: User = { username: match.username, role: match.role };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  return null;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}
