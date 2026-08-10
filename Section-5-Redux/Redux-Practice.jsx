//Create a Redux Store

const reducer = (state = 5) => {
  return state;
};

// In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a
// React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object
// housed in the Redux store.
// This is the first important principle to understand when learning Redux:
// the Redux store is the single source of truth when it comes to application state.

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

//creates a Redux Store
const store = Redux.createStore(reducer);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get State from the Redux Store

const store1 = Redux.createStore((state = 5) => state);

// gets state of all state managed variables form redux store

const currentState = store1.getState();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Define a Redux Action

// Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts
// the business of updating state based on the action that occurred.

// Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type
// set to the string 'LOGIN'.

// Define an action here:
const action = {
  type: "LOGIN",
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Define an Action Creator

// After creating an action, the next step is sending the action to the Redux store so it can update its state.
// In Redux, you define action creators to accomplish this.
// An action creator is simply a JavaScript function that returns an action. In other words, action
// creators create objects that represent action events.

const action1 = {
  type: "LOGIN",
};
// Define an action creator here:

function actionCreator() {
  return action1;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Dispatch an Action Event

//See part 5 in redux refere for details

const store2 = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store2.dispatch(loginAction());

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Handle an Action in the Store

//See part 6 in redux refere for details

const defaultState = {
  login: false,
};

const reducer2 = (state = defaultState, action) => {
  // Change code below this line

  if (action.type === "LOGIN") {
    return { login: true };
  } else {
    return defaultState;
  }

  // Change code above this line
};

const store3 = Redux.createStore(reducer);

const loginAction2 = () => {
  return {
    type: "LOGIN",
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Use a Switch Statement to Handle Multiple Actions

//See part 7 in redux refere for details

const defaultState2 = {
  authenticated: false,
};

const authReducer = (state = defaultState2, action) => {
  // Change code below this line

  switch (action.type) {
    case "LOGIN":
      // Code to execute if action.type === 'LOGIN'
      return { authenticated: true };
      break;
    case "LOGOUT":
      // Code to execute if action.type === 'LOGOUT'
      return { authenticated: false };
      break;
    default:
      return defaultState;
  }

  // Change code above this line
};

const store4 = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Use const for Action Types

//See part 8 in redux refere for details

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState1 = {
  authenticated: false,
};

const authReducer1 = (state = defaultState1, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store5 = Redux.createStore(authReducer);

const loginUser1 = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser1 = () => {
  return {
    type: LOGOUT,
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Register a Store Listener

//See part 9 in redux refere for details
const ADD = "ADD";

const reducer3 = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store6 = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {
  count += 1;
});

// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Combine Multiple Reducers

//See part 10 in redux refere for details

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN1 = "LOGIN";
const LOGOUT1 = "LOGOUT";

const authReducer2 = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
}); // Define the root reducer here

const store7 = Redux.createStore(rootReducer);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Send Action Data to the Store

//See part 11 in redux refere for details
const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return { type: ADD_NOTE, text: note };
  // Change code above this line
};

const store8 = Redux.createStore(notesReducer);

console.log(store8.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store8.getState());

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Send Action Data to the Store

//See part 12 in redux refere for details

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState3 = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState3, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store9 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default),
);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Write a Counter with Redux

//See part 13 in redux refere for details
const INCREMENT1 = "INCREMENT"; // Define a constant for increment action types
const DECREMENT1 = "DECREMENT"; // Define a constant for decrement action types

const counterReducer1 = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT1:
      return (state += 1);
    case DECREMENT1:
      return (state -= 1);
    default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return { type: INCREMENT };
}; // Define an action creator for incrementing

const decAction = () => {
  return { type: DECREMENT };
}; // Define an action creator for decrementing

const store10 = Redux.createStore(counterReducer1); // Define the Redux store here, passing in your reducers

console.log(store.getState());
store10.dispatch(incAction());
console.log(store.getState());
store10.dispatch(decAction());
console.log(store.getState());

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Never Mutate State and Use the Spread Operator on Arrays

//See part 14 and 15 in redux refere for details

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store11 = Redux.createStore(immutableReducer);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Remove an Item from an Array

//See part 16 in redux refere for details

const immutableReducer2 = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      // Don't mutate state here or the tests will fail

      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store12 = Redux.createStore(immutableReducer);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Copy an Object with Object.assign

//See part 17 in redux refere for details

const defaultState4 = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp",
};

const immutableReducer1 = (state = defaultState4, action) => {
  switch (action.type) {
    case "ONLINE":
      // Don't mutate state here or the tests will fail

      const newObject = Object.assign({}, state);
      newObject.status = "online";
      return newObject;
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE",
  };
};

const store13 = Redux.createStore(immutableReduce1);
