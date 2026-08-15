// ============================================================================
// REDUX PRACTICE
// STEP 7 - USE A SWITCH STATEMENT TO HANDLE MULTIPLE ACTIONS
// ============================================================================
//
// In Step 6, our reducer used an if/else statement:
//
//     if (action.type === "LOGIN") {
//       ...
//     }
//
// In this step, we are going to use a switch statement.
//
// A switch statement makes it easier for a reducer to handle
// multiple different actions.
//
// In this example, we will handle:
//
//     LOGIN
//     LOGOUT
//
// ============================================================================

// ============================================================================
// STEP 7A - CREATE THE INITIAL STATE
// ============================================================================
//
// The application starts with the user logged out.
//
// ============================================================================

const defaultState = {
  authenticated: false,
};

// ============================================================================
// STEP 7B - CREATE THE REDUCER
// ============================================================================
//
// The reducer receives:
//
//     state
//     action
//
// The switch statement examines action.type.
//
// ============================================================================

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------
    // LOGIN
    // ---------------------------------------------------------
    //
    // When LOGIN is dispatched, the user becomes authenticated.
    //

    case "LOGIN":
      return {
        authenticated: true,
      };

    // ---------------------------------------------------------
    // LOGOUT
    // ---------------------------------------------------------
    //
    // When LOGOUT is dispatched, the user becomes unauthenticated.
    //

    case "LOGOUT":
      return {
        authenticated: false,
      };

    // ---------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------
    //
    // If the reducer doesn't recognize the action,
    // return the current state unchanged.
    //

    default:
      return state;
  }
};

// ============================================================================
// STEP 7C - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(authReducer);

// ============================================================================
// STEP 7D - CREATE THE LOGIN ACTION
// ============================================================================

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

// ============================================================================
// STEP 7E - CREATE THE LOGOUT ACTION
// ============================================================================

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// ============================================================================
// STEP 7F - TEST BOTH ACTIONS
// ============================================================================
//
// This function:
//
//     1. Gets the initial state
//     2. Dispatches LOGIN
//     3. Gets the state after LOGIN
//     4. Dispatches LOGOUT
//     5. Gets the state after LOGOUT
//
// ============================================================================

function testSwitchActions() {
  // Find the output <div>
  const output = document.getElementById("switch-output");

  // ---------------------------------------------------------
  // INITIAL STATE
  // ---------------------------------------------------------

  const initialState = store.getState();

  // ---------------------------------------------------------
  // DISPATCH LOGIN
  // ---------------------------------------------------------

  store.dispatch(loginUser());

  // Get state after LOGIN
  const afterLogin = store.getState();

  // ---------------------------------------------------------
  // DISPATCH LOGOUT
  // ---------------------------------------------------------

  store.dispatch(logoutUser());

  // Get state after LOGOUT
  const afterLogout = store.getState();

  // ---------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------

  output.textContent =
    `INITIAL STATE:\n` +
    `${JSON.stringify(initialState, null, 2)}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(afterLogin, null, 2)}\n\n` +
    `AFTER LOGOUT:\n` +
    `${JSON.stringify(afterLogout, null, 2)}`;
}
