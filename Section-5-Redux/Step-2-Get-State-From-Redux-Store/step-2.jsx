// ============================================================================
// REDUX PRACTICE
// STEP 2 - GET STATE FROM THE REDUX STORE
// ============================================================================
//
// In Step 1 we learned how to create a Redux store.
//
// In Step 2 we are learning how to retrieve the current state
// from that store.
//
// Redux provides a method called:
//
//     store.getState()
//
// This returns the current state stored inside the Redux store.
//
// ============================================================================

// ============================================================================
// STEP 2A - CREATE A REDUCER
// ============================================================================
//
// We need a reducer in order to create our Redux store.
//
// For this exercise, the initial state will simply be the number 5.
//
// ============================================================================

const reducer = (state = 5) => {
  return state;
};

// ============================================================================
// STEP 2B - CREATE THE REDUX STORE
// ============================================================================
//
// We pass our reducer to Redux.createStore().
//
// The store will now contain our state.
//
// ============================================================================

const store = Redux.createStore(reducer);

// ============================================================================
// STEP 2C - GET THE CURRENT STATE
// ============================================================================
//
// getState() returns the current state inside the Redux store.
//
// Since our reducer starts with:
//
//     state = 5
//
// getState() will return:
//
//     5
//
// ============================================================================

const currentState = store.getState();

// ============================================================================
// STEP 2D - TEST getState()
// ============================================================================
//
// This function is connected to the button in index.html.
//
// When the button is clicked, we display the state returned
// by store.getState().
//
// ============================================================================

function testGetState() {
  // Find the output <div> in index.html
  const output = document.getElementById("state-output");

  // Display the current Redux state
  output.textContent = `Current Redux state: ${currentState}`;
}
