'use client';

import { useEffect, useState } from 'react';
import { getUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
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
    </div>
  );
}
