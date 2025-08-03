"use client";

import { signIn, useSession } from "next-auth/react";

export default function SignInButton() {
    const { data: session } = useSession();

    if (session && session?.user) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    Welcome, {session?.user.name}!
                </span>
                <button
                    onClick={() => signIn()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn("keycloak")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign In with Keycloak
        </button>
    );
}
