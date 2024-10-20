export const baseUrl = "https://localhost:7061/api/";
export const externalParams = {
  github: {
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    redirectUri: "http://localhost:3000/github-callback",
  },
  facebook: {
    clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    redirectUri: "http://localhost:3000/facebook-callback",
  },
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: "http://localhost:3000/google-callback",
  },
};
