import ContentConstants from "../constants/content";

export const getCategoriesData = () => ({
  type: ContentConstants.GET_CATEGORIES_DATA,
});

export const getCategoriesSuccess = ({ categories }) => {
  return {
    type: ContentConstants.GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
};

export const getCategoriesFailed = ({ message }) => ({
  type: ContentConstants.GET_CATEGORIES_FAILED,
  payload: { message },
});

export const getCategoryPlaylistData = () => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_DATA,
});

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
});

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_FAILED,
  payload: message,
});

export const getPlaylistTracksData = () => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_DATA,
});

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

export const getPlaylistTracksFailed = ({ message }) => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_FAILED,
  payload: message,
});

export const addPlayerTrack = (track) => ({
  type: ContentConstants.ADD_PLAYER_TRACK,
  payload: track,
});

export const removePlayerTrack = () => ({
  type: ContentConstants.REMOVE_PLAYER_TRACK,
});

export const setPlayerHeight = (height) => ({
  type: ContentConstants.SET_PLAYER_HEIGHT,
  payload: height,
});
