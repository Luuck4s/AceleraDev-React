export const getState = (key) => {
  const state = localStorage.getItem(`@SpotifyPocket:${key}`);

  if (state !== null) {
    return JSON.parse(state);
  }

  return undefined;
};

export const setState = (key, state) => {
  const stateToSave = JSON.stringify(state);
  localStorage.setItem(`@SpotifyPocket:${key}`, stateToSave);
};
