export const normalizeUrl = (url, ...rest) => {
  return [url, ...rest].join("/");
};