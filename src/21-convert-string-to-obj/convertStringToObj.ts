export const convertStringToObj = (
  input: string,
  value: any
): Record<string, any> => {
  if (!input) return {};
  const properties = input.split(".");
  let currentObject: Record<string, any> = {};
  let tempObject = currentObject;

  for (let i = 0; i < properties.length - 1; i++) {
    const prop = properties[i];
    tempObject[prop] = {};
    tempObject = tempObject[prop];
  }

  tempObject[properties[properties.length - 1]] = value;

  return currentObject;
};
