import { camelCase } from "lodash";

export const getInfoFromUrl = (url) => {
  if (!url) {
    return {
      error:
        "Acesso negado. Você não possui permissões para acessar o aplicativo",
    };
  }

  return url
    .substring(1)
    .split("&")
    .reduce((acum, item) => {
      if (item) {
        const keyValue = item.split("=");

        acum[camelCase(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
      return acum;
    }, {});
};


export const sanitizeUrl = (rawURL, urlKey) => {
  const property = Object.keys(urlKey)[0];

  return rawURL.replace(`{${property}}`, urlKey[property]);
}
