const { json, createError } = require('micro');
module.exports = async (req) => {
  if (req.method !== 'POST') {
    throw createError(404, 'Not Found');
  }
  const { value = 0 } = await json(req);
  return {
    value: Number(value) + 1
  };
};