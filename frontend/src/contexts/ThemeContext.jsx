import { createContext, useContext, useEffect, useReducer } from "react";

//1-conetxt)Create a new context provider
export const ThemeProvider = createContext();

//I decided to make a const because we have it in several places
const WINDOW_MATCH_MEDIA = window.matchMedia(
  "(prefers-color-scheme: light)",
).matches;

//1-useReducer)Create a intialState
const initialState = {
  isLightMode: WINDOW_MATCH_MEDIA,
  token: "md",
  type: WINDOW_MATCH_MEDIA ? "primary" : "secondary",
};

//2-useReducer)Create reducer function
function reducer(state, action) {
  switch (action.type) {
    case "theme/toggleDarkMode":
      return {
        ...state,
        isLightMode: action.payload,
        type: state.isLightMode ? "secondary" : "primary",
      };

    default:
      throw new Error("Unknown action.");
  }
}

//2-context)Provide the value to the subscriptions
function ThemeContextProvider({ children }) {
  //Variables
  const [{ isLightMode, token, type }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const selectedTypeInverse = type === "primary" ? "secondary" : "primary";

  //Functions
  //3-useReducer)Dispatch an action
  function handleDarkMode(value) {
    dispatch({
      type: "theme/toggleDarkMode",
      payload: value,
    });
  }

  //Responsible for changing the mode after user changed state
  useEffect(
    function () {
      if (isLightMode) {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    },
    [isLightMode],
  );

  return (
    <ThemeProvider.Provider
      value={{ isLightMode, token, type, selectedTypeInverse, handleDarkMode }}
    >
      {children}
    </ThemeProvider.Provider>
  );
}

//3-contxt)Subscribe to the context
function useThemeContext() {
  const context = useContext(ThemeProvider);

  if (!context) {
    throw new Error("Components must be used within ThemeContext.");
  }

  return context;
}

export { ThemeContextProvider, useThemeContext };
