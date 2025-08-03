"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/auth/SignInButton";
import SignOutButton from "@/components/auth/SignOutButton";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    return (
        <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/* Header with Auth */}
            <header className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    NextAuth with Keycloak Demo
                </h1>
                <div className="flex items-center gap-4">
                    <SignInButton />
                    <SignOutButton />
                </div>
            </header>

            <main className="flex flex-col gap-[32px] items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />

                {session ? (
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p>
                                <strong>Name:</strong> {session?.user?.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {session.user?.email}
                            </p>
                            <p>
                                <strong>User ID:</strong> {session?.user?.id}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-semibold mb-4">
                            Authentication Demo
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sign in with Keycloak to see your user information.
                        </p>
                    </div>
                )}

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="https://next-auth.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NextAuth.js Docs
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                        href="https://www.keycloak.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keycloak Docs
                    </a>
                </div>
            </main>

            <footer className="flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn Next.js
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/nextauthjs/next-auth"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    NextAuth.js
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.keycloak.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Keycloak →
                </a>
            </footer>
        </div>
    );
}

