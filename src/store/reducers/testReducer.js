const initialState = {
    apiWeather: {},
    city: "",
    
};

export const FETCH_DATA_WEATHER = "FETCH_DATA_WEATHER";
export const FETCH_DATA_CITY = "FETCH_DATA_CITY";

export const testReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA_WEATHER:
        return {
          ...state,
          apiWeather: action.payload
        }
    case FETCH_DATA_CITY:
         return {
        ...state,
        city: action.payload
        }

  default:
    return state
  }
}
export const add = ()=> ({type:'ADD'})