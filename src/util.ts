export const getEmbedHost = () => {
  const env = process.env.REACT_APP_EXTENSION_ENV;

  if (env === "development") return `http://localhost:3000`;

  if (env === "staging") return `https://staging.you.com`;

  return `https://you.com`;
};
