export const request = async (url, options = {}) => {
  if (!url) {
    throw new Error("O parâmetro URL é obrigatório");
  }

  const handleErrors = (response) => {
    if (!response.ok) {
      const { status } = response;

      throw status;
    }

    return response.json();
  };

  return await fetch(url, options).then(handleErrors);
};
