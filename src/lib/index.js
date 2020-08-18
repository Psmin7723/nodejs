export const middleware = async (ctx, next) => {
  await next();
};
