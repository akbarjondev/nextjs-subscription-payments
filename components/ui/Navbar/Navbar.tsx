'use client';

import { Button, buttonVariants } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '../dropdown-menu';
import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { useUser } from '@/components/hoc/user-context';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';

export default async function Navbar() {
  const user = useUser();

  console.log(user);

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/queues" className={s.link}>
                Navbatlar
              </Link>
              {user && (
                <Link href="/dashboard" className={s.link}>
                  Ish stoli
                </Link>
              )}
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">+ Yangi qo'shish</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Navbatlar</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        className={buttonVariants({ variant: 'outline' })}
                        href="/queues/new"
                      >
                        Navbat qo'shish
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <SignOutButton />
              </>
            ) : (
              <Link href="/signin" className={s.link}>
                Kirish
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
