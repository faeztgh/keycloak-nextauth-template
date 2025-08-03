import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET ?? "",
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_CLIENT_ID || "",
            clientSecret: "",
            issuer: process.env.KEYCLOAK_ISSUER || "",
            client: {
                clientId: process.env.KEYCLOAK_CLIENT_ID || "",
                clientSecret: "",
                issuer: process.env.KEYCLOAK_ISSUER || "",
            },
            name: "Keycloak",
            id: "keycloak",
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.expiresAt = account.expires_at;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken as string | undefined;
            session.user.id = token.sub as string;
            return session;
        },
    },
};

export default authOptions;

