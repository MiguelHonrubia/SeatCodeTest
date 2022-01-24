export const pathBuilder = (body: any): any[] => {
  const array: any[] = [];

  Object.keys(body).forEach((elem) => {
    const obj = {
      op: "replace",
      path: `/${elem}`,
      value: body[elem],
    };
    array.push(obj);
  });

  return array;
};
