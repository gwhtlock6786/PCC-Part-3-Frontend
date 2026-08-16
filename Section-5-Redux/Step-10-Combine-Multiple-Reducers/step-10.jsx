// ============================================================================
// REDUX PRACTICE
// STEP 10 - COMBINE MULTIPLE REDUCERS
// ============================================================================
//
// So far, we have worked with one reducer at a time.
//
// In a real application, we may have many different pieces of state.
//
// For example:
//
//     counter state
//     authentication state
//     shopping cart state
//     user profile state
//
// Instead of putting everything into one giant reducer, we can
// create separate reducers.
//
// Then Redux can combine those reducers using:
//
//     Redux.combineReducers()
//
// ============================================================================

// ============================================================================
// STEP 10A - CREATE ACTION TYPES FOR THE COUNTER
// ============================================================================

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

// ============================================================================
// STEP 10B - CREATE THE COUNTER REDUCER
// ============================================================================
//
// This reducer is responsible ONLY for the counter.
//
// Its state is a number.
//
// ============================================================================

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    // ---------------------------------------------------------
    // INCREMENT
    // ---------------------------------------------------------

    case INCREMENT:
      return state + 1;

    // ---------------------------------------------------------
    // DECREMENT
    // ---------------------------------------------------------

    case DECREMENT:
      return state - 1;

    // ---------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 10C - CREATE ACTION TYPES FOR AUTHENTICATION
// ============================================================================

const LOGIN = "LOGIN";

const LOGOUT = "LOGOUT";

// ============================================================================
// STEP 10D - CREATE THE AUTHENTICATION REDUCER
// ============================================================================
//
// This reducer is responsible ONLY for authentication.
//
// Its state is an object.
//
// ============================================================================

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    // ---------------------------------------------------------
    // LOGIN
    // ---------------------------------------------------------

    case LOGIN:
      return {
        authenticated: true,
      };

    // ---------------------------------------------------------
    // LOGOUT
    // ---------------------------------------------------------

    case LOGOUT:
      return {
        authenticated: false,
      };

    // ---------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 10E - COMBINE THE REDUCERS
// ============================================================================
//
// combineReducers() creates one root reducer from our smaller reducers.
//
// We are creating two sections of Redux state:
//
//     count
//     auth
//
// The resulting state will look like:
//
//     {
//       count: 0,
//       auth: {
//         authenticated: false
//       }
//     }
//
// ============================================================================

const rootReducer = Redux.combineReducers({
  count: counterReducer,

  auth: authReducer,
});

// ============================================================================
// STEP 10F - CREATE THE REDUX STORE
// ============================================================================
//
// Instead of passing counterReducer or authReducer directly,
// we pass the combined rootReducer.
//
// ============================================================================

const store = Redux.createStore(rootReducer);

// ============================================================================
// STEP 10G - TEST THE COMBINED REDUCERS
// ============================================================================
//
// This function will:
//
//     1. Get the initial state
//     2. Increment the counter
//     3. Log the user in
//     4. Get the updated state
//
// ============================================================================

function testCombineReducers() {
  // Find the output <div>
  const output = document.getElementById("combine-output");

  // ---------------------------------------------------------
  // GET INITIAL STATE
  // ---------------------------------------------------------

  const initialState = store.getState();

  // ---------------------------------------------------------
  // INCREMENT THE COUNTER
  // ---------------------------------------------------------

  store.dispatch({
    type: INCREMENT,
  });

  // ---------------------------------------------------------
  // LOG THE USER IN
  // ---------------------------------------------------------

  store.dispatch({
    type: LOGIN,
  });

  // ---------------------------------------------------------
  // GET UPDATED STATE
  // ---------------------------------------------------------

  const updatedState = store.getState();

  // ---------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------

  output.textContent =
    `INITIAL STATE:\n` +
    `${JSON.stringify(initialState, null, 2)}\n\n` +
    `AFTER INCREMENT + LOGIN:\n` +
    `${JSON.stringify(updatedState, null, 2)}`;
}
