export const compactFormatter = (value) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(value);
