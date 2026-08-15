// ============================================================================
// REDUX PRACTICE
// STEP 5 - DISPATCH AN ACTION
// ============================================================================
//
// In the previous steps we learned:
//
// Step 1:
//     Create a Redux store
//
// Step 2:
//     Get state from the store
//
// Step 3:
//     Create an action
//
// Step 4:
//     Create an action creator
//
// Now we are going to send an action to the Redux store.
//
// We do this using:
//
//     store.dispatch()
//
// ============================================================================

// ============================================================================
// STEP 5A - CREATE A REDUCER
// ============================================================================
//
// The reducer provides the initial state for our store.
//
// For this exercise, the state will contain a login property.
//
// ============================================================================

const reducer = (state = { login: false }) => {
  return state;
};

// ============================================================================
// STEP 5B - CREATE THE REDUX STORE
// ============================================================================
//
// Redux.createStore() creates our Redux store.
//
// ============================================================================

const store = Redux.createStore(reducer);

// ============================================================================
// STEP 5C - CREATE A LOGIN ACTION
// ============================================================================
//
// This action represents a LOGIN event.
//
// ============================================================================

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// ============================================================================
// STEP 5D - DISPATCH THE ACTION
// ============================================================================
//
// dispatch() sends the action to the Redux store.
//
// The basic pattern is:
//
//     store.dispatch(action)
//
// ============================================================================

function testDispatch() {
  // Find the output <div> in index.html
  const output = document.getElementById("dispatch-output");

  // Create the LOGIN action
  //Then
  // Dispatch the action to Redux
  store.dispatch(loginAction()); //the answer

  // Get the current state after dispatching
  const stateAfterDispatch = store.getState();

  // Display the results
  output.textContent =
    `LOGIN action dispatched!\n\n` +
    `ACTION:\n` +
    `${JSON.stringify(loginAction(), null, 2)}\n\n` +
    `CURRENT STATE:\n` +
    `${JSON.stringify(stateAfterDispatch, null, 2)}`;
}
