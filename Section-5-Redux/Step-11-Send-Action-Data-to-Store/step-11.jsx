// ============================================================================
// REDUX PRACTICE
// STEP 11 - SEND ACTION DATA TO THE STORE
// ============================================================================
//
// Up to this point, our actions have mostly looked like this:
//
//     {
//       type: "LOGIN"
//     }
//
// In this step, we are going to send additional information
// with an action.
//
// For example:
//
//     {
//       type: "ADD_NOTE",
//       text: "Hello from Redux!"
//     }
//
// The reducer can then access that information using:
//
//     action.text
//
// ============================================================================

// ============================================================================
// STEP 11A - CREATE THE ACTION TYPE
// ============================================================================
//
// Using a constant for the action type keeps our code consistent
// with what we learned in Step 8.
//
// ============================================================================

const ADD_NOTE = "ADD_NOTE";

// ============================================================================
// STEP 11B - CREATE THE INITIAL STATE
// ============================================================================
//
// Our initial state will simply be a string.
//
// ============================================================================

const defaultState = "Initial State";

// ============================================================================
// STEP 11C - CREATE THE REDUCER
// ============================================================================
//
// The reducer receives:
//
//     state
//     action
//
// When the action type is ADD_NOTE, we take the note from:
//
//     action.text
//
// and use it as the new state.
//
// ============================================================================

const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------
    // ADD NOTE
    // ---------------------------------------------------------

    case ADD_NOTE:
      // Get the note from the action
      //in Redux the reducer doesn't directly change state
      //Instead, the reducer returns the new state, and Redux takes that returned value and stores it as the current state.
      return action.text;

    // ---------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 11D - CREATE THE ACTION CREATOR
// ============================================================================
//
// The action creator accepts a note as an argument.
//
// It then places that note inside the action.
//
// ============================================================================

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note,
  };
};

// ============================================================================
// STEP 11E - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(notesReducer);

// ============================================================================
// STEP 11F - TEST SENDING DATA WITH AN ACTION
// ============================================================================
//
// This function:
//
//     1. Gets the current state
//     2. Gets the note from the input
//     3. Creates an action containing that note
//     4. Dispatches the action
//     5. Gets the new state
//     6. Displays everything on the page
//
// ============================================================================

function testSendActionData() {
  // Find the output element
  const output = document.getElementById("action-data-output");

  // Find the input element
  const input = document.getElementById("note-input");

  // ---------------------------------------------------------
  // GET INITIAL STATE
  // ---------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------
  // GET DATA FROM THE INPUT
  // ---------------------------------------------------------

  const note = input.value;

  // ---------------------------------------------------------
  // CREATE AN ACTION WITH DATA
  // ---------------------------------------------------------

  const action = addNoteText(note);

  // ---------------------------------------------------------
  // DISPATCH THE ACTION
  // ---------------------------------------------------------

  store.dispatch(action);

  // ---------------------------------------------------------
  // GET THE NEW STATE
  // ---------------------------------------------------------

  const after = store.getState();

  // ---------------------------------------------------------
  // DISPLAY RESULTS
  // ---------------------------------------------------------

  output.textContent =
    `INITIAL STATE:\n` +
    `${before}\n\n` +
    `ACTION SENT TO STORE:\n` +
    `${JSON.stringify(action, null, 2)}\n\n` +
    `NEW STATE:\n` +
    `${after}`;
}
