// ============================================================================
// STEP 13
// WRITE A COUNTER WITH REDUX
// ============================================================================
//
// This exercise puts several Redux concepts together:
//
//     1. Action types
//     2. Action creators
//     3. Reducer
//     4. Store
//     5. Dispatch
//     6. getState()
//
// Our counter will start at:
//
//     0
//
// Then we can:
//
//     INCREMENT → 1
//
//     INCREMENT → 2
//
//     DECREMENT → 1
//
// ============================================================================

// ============================================================================
// STEP 13.1 - ACTION TYPES
// ============================================================================
//
// These constants identify the actions our counter understands.
//
// ============================================================================

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

// ============================================================================
// STEP 13.2 - COUNTER REDUCER
// ============================================================================
//
// The reducer receives:
//
//     state
//     action
//
// It then decides what the NEW state should be.
//
// ============================================================================

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // INCREMENT
    // ---------------------------------------------------------------
    //
    // Take the current state and add 1.
    //
    // Example:
    //
    //     0 → 1
    //
    // ---------------------------------------------------------------

    case INCREMENT:
      return state + 1;

    // ---------------------------------------------------------------
    // DECREMENT
    // ---------------------------------------------------------------
    //
    // Take the current state and subtract 1.
    //
    // Example:
    //
    //     1 → 0
    //
    // ---------------------------------------------------------------

    case DECREMENT:
      return state - 1;

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------
    //
    // If we don't recognize the action, return the existing state.
    //
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 13.3 - INCREMENT ACTION CREATOR
// ============================================================================
//
// This function creates an action object.
//
// ============================================================================

const increment = () => {
  return {
    type: INCREMENT,
  };
};

// ============================================================================
// STEP 13.4 - DECREMENT ACTION CREATOR
// ============================================================================
//
// This function creates a DECREMENT action object.
//
// ============================================================================

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

// ============================================================================
// STEP 13.5 - CREATE THE REDUX STORE
// ============================================================================
//
// Redux.createStore() connects our reducer to a Redux store.
//
// The store will hold our current counter state.
//
// ============================================================================

const store = Redux.createStore(counterReducer);

// ============================================================================
// STEP 13.6 - SHOW THE CURRENT STATE
// ============================================================================
//
// This helper function gets the current state from Redux and
// displays it on the page.
//
// ============================================================================

function displayCounter() {
  const output = document.getElementById("counter-output");

  const currentState = store.getState();

  output.textContent = "CURRENT COUNTER STATE:\n\n" + currentState;
}

// ============================================================================
// STEP 13.7 - TEST INCREMENT
// ============================================================================
//
// This demonstrates:
//
//     action creator
//          ↓
//     dispatch
//          ↓
//     reducer
//          ↓
//     new state
//
// ============================================================================

function testIncrement() {
  const output = document.getElementById("counter-output");

  // ---------------------------------------------------------------
  // GET THE STATE BEFORE THE ACTION
  // ---------------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------------
  // CREATE THE ACTION
  // ---------------------------------------------------------------

  const action = increment();

  // ---------------------------------------------------------------
  // DISPATCH THE ACTION
  // ---------------------------------------------------------------

  store.dispatch(action);

  // ---------------------------------------------------------------
  // GET THE NEW STATE
  // ---------------------------------------------------------------

  const after = store.getState();

  // ---------------------------------------------------------------
  // DISPLAY WHAT HAPPENED
  // ---------------------------------------------------------------

  output.textContent =
    "INCREMENT TEST\n\n" +
    "STATE BEFORE:\n" +
    `${before}\n\n` +
    "ACTION:\n" +
    `${JSON.stringify(action, null, 2)}\n\n` +
    "STATE AFTER:\n" +
    `${after}`;
}

// ============================================================================
// STEP 13.8 - TEST DECREMENT
// ============================================================================
//
// Same process as increment, but with the DECREMENT action.
//
// ============================================================================

function testDecrement() {
  const output = document.getElementById("counter-output");

  // Get the state before the action

  const before = store.getState();

  // Create the DECREMENT action

  const action = decrement();

  // Send the action to Redux

  store.dispatch(action);

  // Get the new state

  const after = store.getState();

  // Display the results

  output.textContent =
    "DECREMENT TEST\n\n" +
    "STATE BEFORE:\n" +
    `${before}\n\n` +
    "ACTION:\n" +
    `${JSON.stringify(action, null, 2)}\n\n` +
    "STATE AFTER:\n" +
    `${after}`;
}

// ============================================================================
// STEP 13.9 - RUN THE FULL COUNTER TEST
// ============================================================================
//
// This runs several Redux actions in sequence.
//
// Starting:
//
//     0
//
// Increment:
//
//     1
//
// Increment:
//
//     2
//
// Decrement:
//
//     1
//
// ============================================================================

function testCounter() {
  const output = document.getElementById("counter-output");

  // ---------------------------------------------------------------
  // STARTING STATE
  // ---------------------------------------------------------------

  const startingState = store.getState();

  // ---------------------------------------------------------------
  // FIRST INCREMENT
  // ---------------------------------------------------------------

  store.dispatch(increment());

  const afterFirstIncrement = store.getState();

  // ---------------------------------------------------------------
  // SECOND INCREMENT
  // ---------------------------------------------------------------

  store.dispatch(increment());

  const afterSecondIncrement = store.getState();

  // ---------------------------------------------------------------
  // DECREMENT
  // ---------------------------------------------------------------

  store.dispatch(decrement());

  const afterDecrement = store.getState();

  // ---------------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------------

  output.textContent =
    "FULL COUNTER TEST\n\n" +
    "STARTING STATE:\n" +
    `${startingState}\n\n` +
    "AFTER FIRST INCREMENT:\n" +
    `${afterFirstIncrement}\n\n` +
    "AFTER SECOND INCREMENT:\n" +
    `${afterSecondIncrement}\n\n` +
    "AFTER DECREMENT:\n" +
    `${afterDecrement}`;
}

// ============================================================================
// INITIAL DISPLAY
// ============================================================================
//
// Show the starting state when the page first loads.
//
// ============================================================================

displayCounter();
