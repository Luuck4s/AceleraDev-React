const selectEpisode = document.querySelector("#episode");

selectEpisode.addEventListener("change", event =>
  renderByEpisode(event.target.value)
);

function renderByEpisode(value) {
  const episodes = filterByEpisodie(data,value);
  renderCards(episodes);
}