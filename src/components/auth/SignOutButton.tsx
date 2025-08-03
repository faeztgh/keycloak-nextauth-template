"use client";

import { signOut, useSession } from "next-auth/react";

export default function SignOutButton() {
    const { data: session } = useSession();

    if (!session) {
        return null;
    }

    return (
        <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign Out
        </button>
    );
}
