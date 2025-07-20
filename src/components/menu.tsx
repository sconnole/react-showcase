'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; 

const links = [
  { href: '/', label: 'Home'},
  { href: '/dashboard', label: 'Dashboard' },
//   { href: '/team', label: 'Team' },
//   { href: '/settings', label: 'Settings' },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 px-6 py-4 bg-background border-b border-border">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors',
            pathname === href
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
