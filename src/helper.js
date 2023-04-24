export const getImagePath = (url) => {
  const startIndex = url.indexOf("public/");
  if (startIndex === -1) return null;
  const path = url.substring(startIndex + "public/".length);
  return `/${path}`;
};
