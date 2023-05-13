const formatParagraph = (string) => {
  if (string && string.split(" ").length >= 12) {
    return `${string.split(" ").slice(0, 12).join(" ")}...`;
  }
  return string;
};

const formatString = (string) => {
  if (string && string.length >= 30) {
    return `${string.slice(0, 30)}...`;
  }
  return string;
};

export { formatParagraph, formatString };
