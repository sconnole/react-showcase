'use client';

import { useEffect, useState } from 'react';
import { getUser, logout } from '@/lib/auth';
import { User } from "@/types/user";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.push('/');
    } else {
      setUser(u);
    }
  }, []);

  if (!user) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
      <p>Your role: {user.role}</p>
      <button
        onClick={() => {
          logout();
          router.replace('/');
        }}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
