// ============================================================================
// REDUX PRACTICE
// STEP 9 - REGISTER A STORE LISTENER
// ============================================================================
//
// In the previous steps we learned:
//
// Step 3:
//     Create an Action
//
// Step 4:
//     Create an Action Creator
//
// Step 5:
//     Dispatch an Action
//
// Step 6:
//     Handle an Action
//
// Step 7:
//     Handle Multiple Actions
//
// Step 8:
//     Use const for Action Types
//
// In this step, we learn:
//
//     store.subscribe()
//
// subscribe() allows us to tell Redux:
//
//     "Run this function whenever the store changes."
//
// ============================================================================

// ============================================================================
// STEP 9A - CREATE AN ACTION TYPE
// ============================================================================
//
// We will create a simple ADD action.
//
// Every time ADD is dispatched, our counter will increase by 1.
//
// ============================================================================

const ADD = "ADD";

// ============================================================================
// STEP 9B - CREATE THE REDUCER
// ============================================================================
//
// The reducer starts the state at 0.
//
// Every time it receives an ADD action, it increases the state
// by 1.
//
// ============================================================================

const reducer = (state = 0, action) => {
  switch (action.type) {
    // ---------------------------------------------------------
    // ADD
    // ---------------------------------------------------------

    case ADD:
      return state + 1;

    // ---------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 9C - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(reducer);

// ============================================================================
// STEP 9D - CREATE A LISTENER COUNTER
// ============================================================================
//
// This variable keeps track of how many times our listener has
// been called.
//
// ============================================================================

let listenerCount = 0;

// ============================================================================
// STEP 9E - REGISTER THE STORE LISTENER
// ============================================================================
//
// store.subscribe() accepts a function.
//
// Redux will run this function whenever the store is updated.
//
// ============================================================================

store.subscribe(() => {
  // Increase the number of listener calls
  listenerCount += 1;
});

// ============================================================================
// STEP 9F - TEST THE STORE LISTENER
// ============================================================================
//
// This function dispatches ADD three times.
//
// The listener should run after each dispatch.
//
// ============================================================================

function testStoreListener() {
  // Find the output <div>
  const output = document.getElementById("listener-output");

  // Reset the listener counter for this test
  listenerCount = 0;

  // ---------------------------------------------------------
  // FIRST DISPATCH
  // ---------------------------------------------------------

  store.dispatch({
    type: ADD,
  });

  const firstCount = listenerCount;

  // ---------------------------------------------------------
  // SECOND DISPATCH
  // ---------------------------------------------------------

  store.dispatch({
    type: ADD,
  });

  const secondCount = listenerCount;

  // ---------------------------------------------------------
  // THIRD DISPATCH
  // ---------------------------------------------------------

  store.dispatch({
    type: ADD,
  });

  const thirdCount = listenerCount;

  // ---------------------------------------------------------
  // GET FINAL STATE
  // ---------------------------------------------------------

  const finalState = store.getState();

  // ---------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------

  output.textContent =
    `AFTER FIRST DISPATCH:\n` +
    `Listener calls: ${firstCount}\n\n` +
    `AFTER SECOND DISPATCH:\n` +
    `Listener calls: ${secondCount}\n\n` +
    `AFTER THIRD DISPATCH:\n` +
    `Listener calls: ${thirdCount}\n\n` +
    `FINAL REDUX STATE:\n` +
    `${finalState}`;
}
