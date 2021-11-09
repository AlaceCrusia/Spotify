export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  //remove after finishing
  // token:
  //   "BQB2JLXCE3uhd0SvRuGioGbiYLLmPlo-6Ez89n6iVci1qdITehbL7E96AiW_knL4THbbHhiCnGSdnjxVaeMY6qquyV1eWhCsW2Xd6rO8hRg69j4cs0v61MaWiG6tUyeTWMCRRs8cAlhgs9PE-BC12KbjIjIU0JE",
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type, [payload];

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
