import merge from 'lodash/merge';

const _defaultState = {
  inputString: "",
  time: new Date(),
  selected: 0,
  weather: {}
};

const reducer = (oldState, action) => {
  Object.freeze(oldState);
  newState = merge({}, oldState);
  switch(action.type){
    case "TICK":
      newState[time] = new Date();
      return  newState;
    case "UPDATE_WEATHER":
      newState[weather] = {
        temperature: action.temperature,
        description: action.description,
        location: action.location
      };
      return newState;
    case "UPDATE_SELECTED":
      newState[selected] = action.selected;
      return newState;
    case "UPDATE_INPUT_STRING":
      newState[inputString] = action.inputString;
      return newState;
  }
};
