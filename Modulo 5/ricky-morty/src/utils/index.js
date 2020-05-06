function filterByStatus(characters, status) {
  return characters.filter((character) => character.status === status);
}

function filterByGender(characters, gender) {
  return characters.filter((character) => character.gender === gender);
}

function haveInEpisodie(episodies, episode) {
  const REGEX = /\d*$/;
  let finded = false;

  episodies.forEach((ep) => {
    if (REGEX.exec(ep) == episode) {
      finded = true;
      return;
    }
  });

  return finded;
}

function filterByEpisodie(characters, episodie) {
  return characters.filter((character) =>
    haveInEpisodie(character.episode, episodie)
  );
}

module.exports = {
  filterByStatus,
  filterByGender,
  haveInEpisodie,
  filterByEpisodie,
};
