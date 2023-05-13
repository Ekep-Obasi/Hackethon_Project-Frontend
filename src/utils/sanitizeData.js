import DOMPurify from "dompurify";

const sanitizeData = (data) => ({
  __html: DOMPurify.sanitize(data),
});

export default sanitizeData;
