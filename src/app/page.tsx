// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/lib/auth';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUser();
    if (user) {
      router.replace('/dashboard');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <main className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </main>
  );
}

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<'admin' | 'member'>('member');

  const handleLogin = () => {
    const user = { username, role };
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <div className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white dark:bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-3 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select
        className="w-full p-2 mb-4 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value as 'admin' | 'member')}
      >
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>
      <button
        className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
        onClick={handleLogin}
        disabled={!username}
      >
        Login
      </button>
    </div>
  );
}
