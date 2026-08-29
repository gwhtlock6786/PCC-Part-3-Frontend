// ============================================================================
// REACT REDUX
// STEP 8 - REDUX FILE
// CONNECT REDUX TO THE MESSAGES APP
// ============================================================================

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState = {
  messages: [
    "Welcome to the Messages App!",

    "This message is stored in Redux.",

    "React is receiving these messages through props.",
  ],
};

// ============================================================================
// REDUCER
// ============================================================================
//
// For this step, we are only reading the state.
//
// We are not dispatching any actions yet.
//
// ============================================================================

const messagesReducer = (state = initialState, action) => {
  return state;
};

// ============================================================================
// CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(messagesReducer);
