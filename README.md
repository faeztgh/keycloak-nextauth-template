# NextAuth.js with Keycloak Demo

This is a Next.js application demonstrating authentication using NextAuth.js with Keycloak as the identity provider.

## Features

- 🔐 NextAuth.js integration with Keycloak
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔄 Session management
- 🚀 TypeScript support

## Prerequisites

- Node.js 18+ and pnpm
- A running Keycloak instance
- A configured Keycloak client

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Keycloak Configuration
KEYCLOAK_CLIENT_ID=your-client-id
KEYCLOAK_CLIENT_SECRET=your-client-secret
KEYCLOAK_ISSUER=https://your-keycloak-domain/auth/realms/your-realm
```

### 3. Keycloak Configuration

1. **Create a Realm** (if you don't have one):
   - Log into your Keycloak admin console
   - Create a new realm or use an existing one

2. **Create a Client**:
   - Go to Clients → Create
   - Set Client ID (e.g., `nextauth-demo`)
   - Set Client Protocol to `openid-connect`
   - Set Access Type to `confidential`
   - Add Valid Redirect URIs:
     - `http://localhost:3000/api/auth/callback/keycloak`
     - `http://localhost:3000/auth/signin`
   - Add Web Origins: `http://localhost:3000`

3. **Get Client Credentials**:
   - Go to the Credentials tab of your client
   - Copy the Client Secret

4. **Configure Client Scopes**:
   - Go to the Client Scopes tab
   - Add the following scopes:
     - `openid`
     - `profile`
     - `email`

### 4. Update Environment Variables

Replace the placeholder values in `.env.local` with your actual Keycloak configuration:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

KEYCLOAK_CLIENT_ID=nextauth-demo
KEYCLOAK_CLIENT_SECRET=your-actual-client-secret
KEYCLOAK_ISSUER=https://your-keycloak-domain/auth/realms/your-realm
```

### 5. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

1. **Sign In**: Click the "Sign In with Keycloak" button
2. **Authentication**: You'll be redirected to Keycloak for authentication
3. **User Info**: After successful authentication, you'll see your user information
4. **Sign Out**: Click the "Sign Out" button to end your session

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API route
│   ├── auth/signin/page.tsx             # Custom sign-in page
│   ├── layout.tsx                       # Root layout with SessionProvider
│   └── page.tsx                         # Main page with auth demo
├── components/
│   ├── auth/
│   │   ├── SignInButton.tsx            # Sign-in button component
│   │   └── SignOutButton.tsx           # Sign-out button component
│   └── providers/
│       └── SessionProvider.tsx          # NextAuth session provider
├── lib/
│   └── auth.ts                         # NextAuth configuration
└── types/
    └── next-auth.d.ts                  # TypeScript type extensions
```

## Keycloak Setup Details

### Client Configuration

Your Keycloak client should have these settings:

- **Client ID**: `nextauth-demo` (or your preferred name)
- **Client Protocol**: `openid-connect`
- **Access Type**: `confidential`
- **Valid Redirect URIs**:
  - `http://localhost:3000/api/auth/callback/keycloak`
  - `http://localhost:3000/auth/signin`
- **Web Origins**: `http://localhost:3000`

### User Creation

1. Go to Users → Add User
2. Fill in the required fields (Username, Email, First Name, Last Name)
3. Go to the Credentials tab and set a password
4. Make sure the user is enabled

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**:
   - Check that your redirect URIs in Keycloak match exactly
   - Ensure the protocol (http/https) matches

2. **"Client not found" error**:
   - Verify your client ID and secret are correct
   - Check that the client is enabled in Keycloak

3. **"Realm not found" error**:
   - Verify your realm name in the issuer URL
   - Check that the realm exists and is active

4. **Session not persisting**:
   - Ensure `NEXTAUTH_SECRET` is set and unique
   - Check that cookies are enabled in your browser

### Debug Mode

To enable debug logging, add this to your `.env.local`:

```env
DEBUG=next-auth:*
```

## Production Deployment

For production deployment:

1. Update `NEXTAUTH_URL` to your production domain
2. Update Keycloak redirect URIs to include your production domain
3. Use a strong, unique `NEXTAUTH_SECRET`
4. Consider using environment-specific Keycloak realms

## Learn More

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Keycloak Documentation](https://www.keycloak.org/documentation)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
