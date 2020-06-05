export const findContentById = (id, contents = []) => {
  const { name = "" } = contents.find((content) => content.id === id) || "";
  return name;
};
