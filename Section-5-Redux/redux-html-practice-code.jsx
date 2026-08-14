// ============================================================================
// REDUX PRACTICE
// STEPS 1 - 15
// ============================================================================
//
// This file contains the JavaScript for the Redux Practice Tester.
//
// Each section corresponds to one exercise in the HTML page.
//
// ============================================================================

// ============================================================================
// STEP 1 - CREATE A REDUX STORE
// ============================================================================
//
// A Redux store holds our application state.
//
// Redux.createStore() needs a reducer.
//
// ============================================================================

const reducer = (state = 5) => {
  return state;
};

// Create the Redux store
const store = Redux.createStore(reducer);

// Test Step 1
function testCreateStore() {
  const output = document.getElementById("store-output");

  output.textContent =
    `Redux store created successfully!\n\n` + `Store: ${store}`;
}

// ============================================================================
// STEP 2 - GET STATE FROM THE REDUX STORE
// ============================================================================
//
// getState() lets us retrieve the current state from a Redux store.
//
// ============================================================================

const store1 = Redux.createStore((state = 5) => state);

// Get the current state
const currentState = store1.getState();

// Test Step 2
function testGetState() {
  const output = document.getElementById("state-output");

  output.textContent = `Current Redux state: ${currentState}`;
}

// ============================================================================
// STEP 3 - DEFINE A REDUX ACTION
// ============================================================================
//
// A Redux action is an object.
//
// The action must have a type property.
//
// ============================================================================

const action = {
  type: "LOGIN",
};

// Test Step 3
function testAction() {
  const output = document.getElementById("action-output");

  output.textContent =
    `Redux Action:\n\n` + `${JSON.stringify(action, null, 2)}`;
}

// ============================================================================
// STEP 4 - DEFINE AN ACTION CREATOR
// ============================================================================
//
// An action creator is a function that returns an action.
//
// ============================================================================

const action1 = {
  type: "LOGIN",
};

// Action creator
function actionCreator() {
  return action1;
}

// Test Step 4
function testActionCreator() {
  const output = document.getElementById("action-creator-output");

  const createdAction = actionCreator();

  output.textContent =
    `Action Creator returned:\n\n` +
    `${JSON.stringify(createdAction, null, 2)}`;
}

// ============================================================================
// STEP 5 - DISPATCH AN ACTION EVENT
// ============================================================================
//
// dispatch() sends an action to the Redux store.
//
// ============================================================================

const store2 = Redux.createStore((state = { login: false }) => state);

// LOGIN action creator
const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Test Step 5
function testDispatch() {
  const output = document.getElementById("dispatch-output");

  // Dispatch the LOGIN action
  store2.dispatch(loginAction());

  // Get the state after dispatching
  const stateAfterDispatch = store2.getState();

  output.textContent =
    `LOGIN action dispatched!\n\n` +
    `Current state:\n` +
    `${JSON.stringify(stateAfterDispatch, null, 2)}`;
}

// ============================================================================
// STEP 6 - HANDLE AN ACTION IN THE STORE
// ============================================================================
//
// The reducer examines the action type.
//
// If the action is LOGIN, the reducer changes the state.
//
// ============================================================================

const defaultState = {
  login: false,
};

// Reducer
const reducer2 = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return {
      login: true,
    };
  } else {
    return state;
  }
};

// Create store
const store3 = Redux.createStore(reducer2);

// LOGIN action creator
const loginAction2 = () => {
  return {
    type: "LOGIN",
  };
};

// Test Step 6
function testHandleAction() {
  const output = document.getElementById("handle-action-output");

  const before = store3.getState();

  // Dispatch LOGIN
  store3.dispatch(loginAction2());

  const after = store3.getState();

  output.textContent =
    `BEFORE LOGIN:\n` +
    `${JSON.stringify(before, null, 2)}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(after, null, 2)}`;
}

// ============================================================================
// STEP 7 - USE A SWITCH STATEMENT
// ============================================================================
//
// A switch statement allows our reducer to handle multiple actions.
//
// ============================================================================

const defaultState2 = {
  authenticated: false,
};

// Authentication reducer
const authReducer = (state = defaultState2, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
      };

    case "LOGOUT":
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

// Create store
const store4 = Redux.createStore(authReducer);

// LOGIN action creator
const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

// LOGOUT action creator
const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// Test Step 7
function testSwitchActions() {
  const output = document.getElementById("switch-output");

  const initialState = store4.getState();

  // LOGIN
  store4.dispatch(loginUser());

  const afterLogin = store4.getState();

  // LOGOUT
  store4.dispatch(logoutUser());

  const afterLogout = store4.getState();

  output.textContent =
    `INITIAL STATE:\n` +
    `${JSON.stringify(initialState, null, 2)}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(afterLogin, null, 2)}\n\n` +
    `AFTER LOGOUT:\n` +
    `${JSON.stringify(afterLogout, null, 2)}`;
}

// ============================================================================
// STEP 8 - USE const FOR ACTION TYPES
// ============================================================================
//
// Instead of repeatedly typing:
//
//     "LOGIN"
//
// and:
//
//     "LOGOUT"
//
// we can store them in constants.
//
// ============================================================================

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Default authentication state
const defaultState1 = {
  authenticated: false,
};

// Authentication reducer
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

// Create store
const store5 = Redux.createStore(authReducer1);

// LOGIN action creator
const loginUser1 = () => {
  return {
    type: LOGIN,
  };
};

// LOGOUT action creator
const logoutUser1 = () => {
  return {
    type: LOGOUT,
  };
};

// Test Step 8
function testConstActionTypes() {
  const output = document.getElementById("const-output");

  // LOGIN
  store5.dispatch(loginUser1());

  const loggedIn = store5.getState();

  // LOGOUT
  store5.dispatch(logoutUser1());

  const loggedOut = store5.getState();

  output.textContent =
    `LOGIN constant:\n${LOGIN}\n\n` +
    `LOGOUT constant:\n${LOGOUT}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(loggedIn, null, 2)}\n\n` +
    `AFTER LOGOUT:\n` +
    `${JSON.stringify(loggedOut, null, 2)}`;
}

// ============================================================================
// STEP 9 - REGISTER A STORE LISTENER
// ============================================================================
//
// store.subscribe() lets us run a function whenever the Redux store changes.
//
// ============================================================================

const ADD = "ADD";

// Counter reducer
const reducer3 = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;

    default:
      return state;
  }
};

// Create store
const store6 = Redux.createStore(reducer3);

// Keep track of how many times the listener runs
let count = 0;

// Register listener
store6.subscribe(() => {
  count += 1;
});

// Test Step 9
function testStoreListener() {
  const output = document.getElementById("listener-output");

  // Reset our JavaScript counter
  count = 0;

  // First dispatch
  store6.dispatch({
    type: ADD,
  });

  const firstCount = count;

  // Second dispatch
  store6.dispatch({
    type: ADD,
  });

  const secondCount = count;

  // Third dispatch
  store6.dispatch({
    type: ADD,
  });

  const thirdCount = count;

  output.textContent =
    `After first dispatch: ${firstCount} listener call\n\n` +
    `After second dispatch: ${secondCount} listener calls\n\n` +
    `After third dispatch: ${thirdCount} listener calls\n\n` +
    `Current Redux state: ${store6.getState()}`;
}

// ============================================================================
// STEP 10 - COMBINE MULTIPLE REDUCERS
// ============================================================================
//
// combineReducers() allows us to combine multiple reducers.
//
// Our store will contain:
//
//     {
//       count: ...,
//       auth: ...
//     }
//
// ============================================================================

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Counter reducer
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

// Authentication reducer
const authReducer2 = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN1:
      return {
        authenticated: true,
      };

    case LOGOUT1:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer2,
});

// Create store
const store7 = Redux.createStore(rootReducer);

// Test Step 10
function testCombineReducers() {
  const output = document.getElementById("combine-output");

  const initialState = store7.getState();

  // Increment counter
  store7.dispatch({
    type: INCREMENT,
  });

  // Login
  store7.dispatch({
    type: LOGIN1,
  });

  const updatedState = store7.getState();

  output.textContent =
    `INITIAL STATE:\n` +
    `${JSON.stringify(initialState, null, 2)}\n\n` +
    `AFTER INCREMENT + LOGIN:\n` +
    `${JSON.stringify(updatedState, null, 2)}`;
}

// ============================================================================
// STEP 11 - SEND ACTION DATA TO THE STORE
// ============================================================================
//
// Actions can contain additional data.
//
// Example:
//
//     {
//       type: "ADD_NOTE",
//       text: "Hello!"
//     }
//
// The reducer can access:
//
//     action.text
//
// ============================================================================

const ADD_NOTE = "ADD_NOTE";

// Notes reducer
const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    case ADD_NOTE:
      return action.text;

    default:
      return state;
  }
};

// Action creator
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note,
  };
};

// Create store
const store8 = Redux.createStore(notesReducer);

// Test Step 11
function testSendActionData() {
  const output = document.getElementById("action-data-output");

  // Get initial state
  const before = store8.getState();

  // Create action containing data
  const action = addNoteText("Hello from Redux!");

  // Dispatch action
  store8.dispatch(action);

  // Get new state
  const after = store8.getState();

  output.textContent =
    `INITIAL STATE:\n` +
    `${before}\n\n` +
    `ACTION SENT TO STORE:\n` +
    `${JSON.stringify(action, null, 2)}\n\n` +
    `NEW STATE:\n` +
    `${after}`;
}

// ============================================================================
// STEP 12 - ASYNC ACTIONS WITH REDUX THUNK
// ============================================================================
//
// Redux normally expects dispatch() to receive an ACTION OBJECT:
//
//     store.dispatch({
//       type: "LOGIN"
//     });
//
// Redux Thunk allows dispatch() to receive a FUNCTION:
//
//     store.dispatch(function (dispatch) {
//       ...
//     });
//
// This lets us perform asynchronous operations.
//
// ============================================================================

// -----------------------------------------------------------------------------
// STEP 12A - ACTION TYPES
// -----------------------------------------------------------------------------

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

// -----------------------------------------------------------------------------
// STEP 12B - REQUESTING DATA ACTION
// -----------------------------------------------------------------------------

const requestingData = () => {
  return {
    type: REQUESTING_DATA,
  };
};

// -----------------------------------------------------------------------------
// STEP 12C - RECEIVED DATA ACTION
// -----------------------------------------------------------------------------

const receivedData = (data) => {
  return {
    type: RECEIVED_DATA,
    users: data.users,
  };
};

// -----------------------------------------------------------------------------
// STEP 12D - ASYNC ACTION CREATOR
// -----------------------------------------------------------------------------
//
// IMPORTANT:
//
// This function returns another function.
//
// That is what Redux Thunk allows us to do.
//
// -----------------------------------------------------------------------------

const handleAsync = () => {
  return function (dispatch) {
    // Tell Redux that we are requesting data
    dispatch(requestingData());

    // Simulate an asynchronous request
    setTimeout(function () {
      // Pretend this came from an API
      const data = {
        users: ["Jeff", "William", "Alice"],
      };

      // Send the received data to Redux
      dispatch(receivedData(data));
    }, 2500);
  };
};

// -----------------------------------------------------------------------------
// STEP 12E - INITIAL STATE
// -----------------------------------------------------------------------------

const defaultState3 = {
  fetching: false,
  users: [],
};

// -----------------------------------------------------------------------------
// STEP 12F - ASYNC REDUCER
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// STEP 12G - CREATE STORE WITH THUNK
// -----------------------------------------------------------------------------
//
// ReduxThunk comes from the Redux Thunk <script> in index.html.
//
// IMPORTANT:
//
// We use ReduxThunk directly.
//
// We DO NOT use ReduxThunk.default.
//
// -----------------------------------------------------------------------------

const store9 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk),
);

// -----------------------------------------------------------------------------
// STEP 12H - TEST ASYNC ACTION
// -----------------------------------------------------------------------------

function testAsyncAction() {
  const output = document.getElementById("async-output");

  // Get starting state
  const startingState = store9.getState();

  // Show starting state
  output.textContent =
    `STARTING STATE:\n` +
    `${JSON.stringify(startingState, null, 2)}\n\n` +
    `Requesting data...`;

  // Dispatch the THUNK
  //
  // handleAsync() returns a function.
  //
  // Redux Thunk allows Redux to execute that function.
  //
  store9.dispatch(handleAsync());

  // Wait briefly so the REQUESTING_DATA state can be seen
  setTimeout(function () {
    const requestingState = store9.getState();

    output.textContent =
      `REQUESTING DATA:\n` +
      `${JSON.stringify(requestingState, null, 2)}\n\n` +
      `Waiting for data...`;
  }, 100);

  // After 2.5 seconds the simulated data arrives
  setTimeout(function () {
    const receivedState = store9.getState();

    output.textContent =
      `RECEIVED DATA:\n` + `${JSON.stringify(receivedState, null, 2)}`;
  }, 2600);
}

// ============================================================================
// STEP 13 - WRITE A COUNTER WITH REDUX
// ============================================================================
//
// This exercise combines:
//
//     1. Action types
//     2. Reducer
//     3. Action creators
//     4. Store
//     5. Dispatch
//
// ============================================================================

// Counter action types
const INCREMENT1 = "INCREMENT";
const DECREMENT1 = "DECREMENT";

// Counter reducer
const counterReducer1 = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT1:
      return state + 1;

    case DECREMENT1:
      return state - 1;

    default:
      return state;
  }
};

// Increment action creator
const incAction = () => {
  return {
    type: INCREMENT1,
  };
};

// Decrement action creator
const decAction = () => {
  return {
    type: DECREMENT1,
  };
};

// Create counter store
const store10 = Redux.createStore(counterReducer1);

// Test Step 13
function testCounter() {
  const output = document.getElementById("counter-output");

  // Starting state
  const startingState = store10.getState();

  // Increment
  store10.dispatch(incAction());

  const afterIncrement = store10.getState();

  // Increment again
  store10.dispatch(incAction());

  const afterSecondIncrement = store10.getState();

  // Decrement
  store10.dispatch(decAction());

  const afterDecrement = store10.getState();

  output.textContent =
    `STARTING STATE: ${startingState}\n\n` +
    `AFTER INCREMENT: ${afterIncrement}\n\n` +
    `AFTER SECOND INCREMENT: ${afterSecondIncrement}\n\n` +
    `AFTER DECREMENT: ${afterDecrement}`;
}

// ============================================================================
// STEP 14 - NEVER MUTATE STATE
// ============================================================================
//
// Redux state should never be directly mutated.
//
// DON'T:
//
//     state.push(action.todo)
//
// DO:
//
//     return [...state, action.todo]
//
// The spread operator creates a new array.
//
// ============================================================================

// Action type
const ADD_TO_DO = "ADD_TO_DO";

// Starting todo list
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

// Immutable reducer
const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Create a NEW array.
      //
      // The original state array is not changed.
      //
      return [...state, action.todo];

    default:
      return state;
  }
};

// Action creator
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

// Create store
const store11 = Redux.createStore(immutableReducer);

// Test Step 14
function testImmutableState() {
  const output = document.getElementById("immutable-output");

  // Get original state
  const before = store11.getState();

  // Add new todo
  store11.dispatch(addToDo("Practice Redux"));

  // Get new state
  const after = store11.getState();

  output.textContent =
    `ORIGINAL STATE:\n` +
    `${JSON.stringify(before, null, 2)}\n\n` +
    `NEW STATE:\n` +
    `${JSON.stringify(after, null, 2)}\n\n` +
    `Notice that a NEW array was created.`;
}

// ============================================================================
// STEP 15 - USE THE SPREAD OPERATOR ON ARRAYS
// ============================================================================
//
// The spread operator:
//
//     ...
//
// can copy the contents of one array into another array.
//
// Example:
//
//     const newArray = [...oldArray, newValue];
//
// This is extremely useful when working with Redux because it helps us
// create new state instead of modifying existing state.
//
// ============================================================================

// Test Step 15
function testSpreadOperator() {
  const output = document.getElementById("spread-output");

  // Original array
  const originalArray = ["Apple", "Banana", "Orange"];

  // Create a completely NEW array
  const newArray = [...originalArray, "Grape"];

  output.textContent =
    `ORIGINAL ARRAY:\n` +
    `${JSON.stringify(originalArray, null, 2)}\n\n` +
    `NEW ARRAY:\n` +
    `${JSON.stringify(newArray, null, 2)}\n\n` +
    `Same array? ${originalArray === newArray}`;
}
