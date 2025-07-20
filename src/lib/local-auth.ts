import { User} from "@/lib/types/user";

const STORAGE_KEY = 'auth_user';
const LOCAL_USERS: User[] = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'member', password: 'member', role: 'member' },
];

export function getStoredUser(): User | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function storeUser(user: User): User | null {
  const match = LOCAL_USERS.find((u) => u.username === user.username && u.password === user.password);
  if (match) {
    const user: User = { username: match.username, role: match.role };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  return null;
}

export function clearStoredUser(): void { 
  localStorage.removeItem(STORAGE_KEY);
}
