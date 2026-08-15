// ============================================================================
// REDUX PRACTICE
// STEP 6 - HANDLE AN ACTION IN THE STORE
// ============================================================================
//
// In Step 5 we learned how to dispatch an action:
//
//     store.dispatch(action)
//
// However, our reducer did not do anything with the action.
//
// In this step, the reducer will:
//
//     1. Receive the current state
//     2. Receive the action
//     3. Check the action type
//     4. Return the appropriate new state
//
// ============================================================================

// ============================================================================
// STEP 6A - CREATE THE INITIAL STATE
// ============================================================================
//
// Our application starts with the user NOT logged in.
//
// ============================================================================

const defaultState = {
  login: false,
};

// ============================================================================
// STEP 6B - CREATE A REDUCER
// ============================================================================
//
// A reducer receives two important values:
//
//     state
//     action
//
// The reducer examines the action and decides what the new
// state should be.
//
// ============================================================================

const reducer = (state = defaultState, action) => {
  // Check whether the action is LOGIN
  if (action.type === "LOGIN") {
    // Return a NEW state object
    return {
      login: true,
    };
  } else {
    // If the action isn't something we recognize,
    // return the current state unchanged.
    return state;
  }
};

// ============================================================================
// STEP 6C - CREATE THE REDUX STORE
// ============================================================================
//
// Pass the reducer to Redux.createStore().
//
// ============================================================================

const store = Redux.createStore(reducer);

// ============================================================================
// STEP 6D - CREATE A LOGIN ACTION
// ============================================================================
//
// This function creates the action that we will dispatch.
//
// ============================================================================

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// ============================================================================
// STEP 6E - DISPATCH THE ACTION AND WATCH THE STATE CHANGE
// ============================================================================
//
// This function is connected to the button in index.html.
//
// ============================================================================

function testHandleAction() {
  // Find the output <div>
  const output = document.getElementById("handle-action-output");

  // Get the state BEFORE dispatching LOGIN
  const before = store.getState();

  // Create the LOGIN action
  const action = loginAction();

  // Dispatch the action
  store.dispatch(action);

  // Get the state AFTER dispatching LOGIN
  const after = store.getState();

  // Display the results
  output.textContent =
    `ACTION DISPATCHED:\n` +
    `${JSON.stringify(action, null, 2)}\n\n` +
    `BEFORE LOGIN:\n` +
    `${JSON.stringify(before, null, 2)}\n\n` +
    `AFTER LOGIN:\n` +
    `${JSON.stringify(after, null, 2)}`;
}
