// ============================================================================
// STEP 12
// USE MIDDLEWARE TO HANDLE ASYNCHRONOUS ACTIONS
// ============================================================================
//
// Redux normally expects dispatch() to receive an ACTION OBJECT:
//
//     dispatch({
//       type: "SOME_ACTION"
//     });
//
// But asynchronous operations don't work that way.
//
// For example:
//
//     Request data
//          ↓
//     Wait for response
//          ↓
//     Receive data
//          ↓
//     Dispatch action
//
// Redux Thunk allows us to dispatch a FUNCTION instead of an action object.
//
// The function can perform asynchronous work and then dispatch normal
// Redux actions when the work is finished.
//
// ============================================================================

// ============================================================================
// STEP 12.1 - ACTION TYPES
// ============================================================================
//
// These constants identify the different actions that can occur.
//
// ============================================================================

const REQUESTING_DATA = "REQUESTING_DATA";

const RECEIVED_DATA = "RECEIVED_DATA";

// ============================================================================
// STEP 12.2 - ACTION CREATOR
// REQUESTING DATA
// ============================================================================
//
// This action tells Redux:
//
// "We are currently requesting data."
//
// ============================================================================

const requestingData = () => {
  return {
    type: REQUESTING_DATA,
  };
};

// ============================================================================
// STEP 12.3 - ACTION CREATOR
// RECEIVED DATA
// ============================================================================
//
// This action carries the data that we received.
//
// Notice that the action contains additional data:
//
//     users: data.users
//
// ============================================================================

const receivedData = (data) => {
  return {
    type: RECEIVED_DATA,

    users: data.users,
  };
};

// ============================================================================
// STEP 12.4 - REDUCER DEFAULT STATE
// ============================================================================
//
// Our Redux store will keep track of two things:
//
// fetching
//     Are we currently waiting for data?
//
// users
//     The data we received.
//
// ============================================================================

const defaultState = {
  fetching: false,

  users: [],
};

// ============================================================================
// STEP 12.5 - REDUCER
// ============================================================================
//
// The reducer determines how the state changes when actions arrive.
//
// ============================================================================

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // REQUESTING DATA
    // ---------------------------------------------------------------

    case REQUESTING_DATA:
      return {
        fetching: true,

        users: [],
      };

    // ---------------------------------------------------------------
    // RECEIVED DATA
    // ---------------------------------------------------------------

    case RECEIVED_DATA:
      return {
        fetching: false,

        users: action.users,
      };

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 12.6 - ASYNCHRONOUS ACTION CREATOR
// ============================================================================
//
// This is the most important part of this exercise.
//
// Normally an action creator returns an OBJECT:
//
//     return {
//       type: "SOME_ACTION"
//     };
//
// This action creator returns a FUNCTION:
//
//     return function(dispatch) {
//
//     };
//
// Redux Thunk middleware allows Redux to accept this function.
//
// ============================================================================

const handleAsync = () => {
  return function (dispatch) {
    // ---------------------------------------------------------------
    // STEP 12.6.1
    // TELL REDUX THAT WE ARE REQUESTING DATA
    // ---------------------------------------------------------------

    dispatch(requestingData());

    // ---------------------------------------------------------------
    // STEP 12.6.2
    // SIMULATE AN ASYNCHRONOUS REQUEST
    // ---------------------------------------------------------------
    //
    // In a real application this could be:
    //
    //     fetch()
    //
    //     axios.get()
    //
    //     an API request
    //
    // Here we use setTimeout() to simulate waiting for a server.
    //
    // ---------------------------------------------------------------

    setTimeout(() => {
      // -------------------------------------------------------------
      // SIMULATED SERVER RESPONSE
      // -------------------------------------------------------------

      const data = {
        users: ["Jeff", "William", "Alice"],
      };

      // -------------------------------------------------------------
      // STEP 12.6.3
      // SEND THE RECEIVED DATA TO REDUX
      // -------------------------------------------------------------

      dispatch(receivedData(data));
    }, 2500);
  };
};

// ============================================================================
// STEP 12.7 - CREATE THE REDUX STORE
// ============================================================================
//
// This is where Redux Thunk middleware is added.
//
// Redux.applyMiddleware() tells Redux:
//
// "Run this middleware whenever dispatch() is called."
//
// ============================================================================

const store = Redux.createStore(
  asyncDataReducer,

  Redux.applyMiddleware(ReduxThunk),
);

// ============================================================================
// STEP 12.8 - TEST THE ASYNCHRONOUS ACTION
// ============================================================================

function testAsyncAction() {
  const output = document.getElementById("async-output");

  // ---------------------------------------------------------------
  // GET THE STARTING STATE
  // ---------------------------------------------------------------

  const startingState = store.getState();

  output.textContent =
    "STARTING STATE:\n\n" +
    JSON.stringify(startingState, null, 2) +
    "\n\n" +
    "Dispatching asynchronous action...";

  // ---------------------------------------------------------------
  // DISPATCH THE ASYNCHRONOUS ACTION
  // ---------------------------------------------------------------
  //
  // Notice something important:
  //
  // handleAsync()
  //
  // returns a FUNCTION.
  //
  // Redux Thunk allows that function to be dispatched.
  //
  // ---------------------------------------------------------------

  store.dispatch(handleAsync());

  // ---------------------------------------------------------------
  // CHECK THE STATE AFTER REQUESTING DATA
  // ---------------------------------------------------------------
  //
  // The REQUESTING_DATA action has already been dispatched.
  //
  // Therefore fetching should now be true.
  //
  // ---------------------------------------------------------------

  setTimeout(() => {
    const requestingState = store.getState();

    output.textContent =
      "REQUESTING DATA:\n\n" +
      JSON.stringify(requestingState, null, 2) +
      "\n\n" +
      "Waiting for data...";
  }, 100);

  // ---------------------------------------------------------------
  // CHECK THE STATE AFTER THE DATA ARRIVES
  // ---------------------------------------------------------------
  //
  // The simulated request takes 2.5 seconds.
  //
  // Once the data arrives, RECEIVED_DATA is dispatched.
  //
  // The reducer then creates the new state.
  //
  // ---------------------------------------------------------------

  setTimeout(() => {
    const receivedState = store.getState();

    output.textContent =
      "RECEIVED DATA:\n\n" +
      JSON.stringify(receivedState, null, 2) +
      "\n\n" +
      "Asynchronous Redux action completed!";
  }, 2600);
}
