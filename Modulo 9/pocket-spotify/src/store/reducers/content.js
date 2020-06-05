import ContentConstants from "../constants/content";

const INITIAL_STATE_CONTENT = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  errorMessage: "",
};

const content = (state = INITIAL_STATE_CONTENT, action) => {
  switch (action.type) {
    case ContentConstants.GET_CATEGORIES_DATA:
      return {
        ...state,
        categories: [],
        status: "running",
      };
    case ContentConstants.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        errorMessage: "",
        status: "success",
        categories: action.payload,
      };
    case ContentConstants.GET_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
        errorMessage: action.payload,
        status: "error",
      };
    case ContentConstants.GET_CATEGORY_PLAYLIST_DATA:
      return {
        ...state,
        playlists: [],
        status: "running",
      };
    case ContentConstants.GET_CATEGORY_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
        errorMessage: "",
        status: "success",
      };
    case ContentConstants.GET_CATEGORY_PLAYLIST_FAILED:
      return {
        ...state,
        playlists: [],
        errorMessage: action.payload,
        status: "error",
      };
    case ContentConstants.GET_PLAYLIST_TRACKS_DATA:
      return {
        ...state,
        tracks: [],
        status: "running",
      };
    case ContentConstants.GET_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload.filter(({ track }) => track),
        errorMessage: "",
        status: "success",
      };
    case ContentConstants.GET_PLAYLIST_TRACKS_FAILED:
      return {
        ...state,
        tracks: [],
        errorMessage: action.payload,
        status: "error",
      };
    case ContentConstants.ADD_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: action.payload.id,
        playingNowTrack: action.payload,
      };
    case ContentConstants.REMOVE_PLAYER_TRACK:
      return {
        ...state,
        playerHeight: 0,
        playingNowId: null,
        playingNowTrack: null,
      };
    case ContentConstants.SET_PLAYER_HEIGHT:
      return {
        ...state,
        playerHeight: action.payload,
      };
    default:
      return state;
  }
};

export default content;
