const initialState = {};

 const newsSelected = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_NEWS":
      return  {...payload} ;
    default:
      return state;
  }
}

export default newsSelected
