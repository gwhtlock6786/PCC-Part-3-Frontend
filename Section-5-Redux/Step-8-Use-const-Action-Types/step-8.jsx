// ============================================================================
// REDUX PRACTICE
// STEP 8 - USE const FOR ACTION TYPES
// ============================================================================
//
// In Step 7, we wrote action types directly as strings:
//
//     case "LOGIN":
//
//     case "LOGOUT":
//
// In this step, we create constants for those action types:
//
//     const LOGIN = "LOGIN";
//     const LOGOUT = "LOGOUT";
//
// Then we use the constants throughout our Redux code.
//
// This makes our action types easier to manage and helps prevent
// spelling mistakes.
//
// ============================================================================

// ============================================================================
// STEP 8A - CREATE ACTION TYPE CONSTANTS
// ============================================================================
//
// These constants store the strings that identify our actions.
//
// ============================================================================

const LOGIN = "LOGIN";

const LOGOUT = "LOGOUT";

// ============================================================================
// STEP 8B - CREATE THE INITIAL STATE
// ============================================================================
//
// The application starts with the user logged out.
//
// ============================================================================

const defaultState = {
  authenticated: false,
};

// ============================================================================
// STEP 8C - CREATE THE REDUCER
// ============================================================================
//
// The reducer uses the constants instead of writing:
//
//     "LOGIN"
//     "LOGOUT"
//
// directly inside the switch statement.
//
// ============================================================================

const authReducer = (state = defaultState, action) => {
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
// STEP 8D - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(authReducer);

// ============================================================================
// STEP 8E - CREATE THE LOGIN ACTION CREATOR
// ============================================================================
//
// Notice that we use the LOGIN constant:
//
//     type: LOGIN
//
// instead of:
//
//     type: "LOGIN"
//
// ============================================================================

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

// ============================================================================
// STEP 8F - CREATE THE LOGOUT ACTION CREATOR
// ============================================================================
//
// Again, we use the LOGOUT constant.
//
// ============================================================================

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

// ============================================================================
// STEP 8G - TEST THE ACTION CONSTANTS
// ============================================================================
//
// This function:
//
//     1. Shows the LOGIN constant
//     2. Shows the LOGOUT constant
//     3. Gets the initial state
//     4. Dispatches LOGIN
//     5. Gets the state after LOGIN
//     6. Dispatches LOGOUT
//     7. Gets the state after LOGOUT
//
// ============================================================================

function testConstActionTypes() {
  // Find the output <div>
  const output = document.getElementById("const-output");

  // ---------------------------------------------------------
  // GET INITIAL STATE
  // ---------------------------------------------------------

  const initialState = store.getState();

  // ---------------------------------------------------------
  // DISPATCH LOGIN
  // ---------------------------------------------------------

  store.dispatch(loginUser());

  // Get state after LOGIN
  const loggedIn = store.getState();

  // ---------------------------------------------------------
  // DISPATCH LOGOUT
  // ---------------------------------------------------------

  store.dispatch(logoutUser());

  // Get state after LOGOUT
  const loggedOut = store.getState();

  // ---------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------

  output.textContent =
    `LOGIN constant:\n` +
    `${LOGIN}\n\n` +
    `LOGOUT constant:\n` +
    `${LOGOUT}\n\n` +
    `INITIAL STATE:\n` +
    `${JSON.stringify(initialState, null, 2)}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(loggedIn, null, 2)}\n\n` +
    `AFTER LOGOUT:\n` +
    `${JSON.stringify(loggedOut, null, 2)}`;
}
