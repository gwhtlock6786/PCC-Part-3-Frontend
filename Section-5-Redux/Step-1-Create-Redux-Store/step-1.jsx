// ============================================================================
// REDUX PRACTICE
// STEP 1 - CREATE A REDUX STORE
// ============================================================================
//
// In this exercise we are learning how to create a Redux store.
//
// A Redux application generally contains:
//
//     State
//       ↓
//     Reducer
//       ↓
//     Store
//
// The reducer describes how the state should be handled.
//
// The store holds the state.
//
// ============================================================================

// ============================================================================
// STEP 1A - CREATE A REDUCER
// ============================================================================
//
// A reducer is a function.
//
// A reducer receives the current state and returns the state.
//
// We give state a default value of 5.
//
// ============================================================================

const reducer = (state = 5) => {
  return state;
};

// ============================================================================
// STEP 1B - CREATE THE REDUX STORE
// ============================================================================
//
// Redux.createStore() creates our Redux store.
//
// We pass our reducer into createStore().
//
// ============================================================================

const store = Redux.createStore(reducer);

// ============================================================================
// STEP 1C - TEST THE REDUX STORE
// ============================================================================
//
// This function is connected to the button in index.html.
//
// When the user clicks the button, this function runs.
//
// ============================================================================

function testCreateStore() {
  // Find the output <div> in index.html
  const output = document.getElementById("store-output");

  // Display a message
  output.textContent =
    `Redux store created successfully!\n\n` + `Store: ${store}`;
}
