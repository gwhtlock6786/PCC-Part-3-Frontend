// ============================================================================
// STEP 16
// REMOVE AN ITEM FROM AN ARRAY
// ============================================================================
//
// In Step 14 we learned:
//
//     NEVER MUTATE REDUX STATE
//
// In Step 15 we learned:
//
//     Use the spread operator to create new arrays.
//
// In this step we will learn another important technique:
//
//     filter()
//
// filter() allows us to create a NEW array containing only the
// items that meet a condition.
//
// This makes filter() very useful when removing items from Redux state.
//
// ============================================================================

// ============================================================================
// STEP 16.1 - ORIGINAL ARRAY
// ============================================================================

const originalArray = ["Apple", "Banana", "Orange", "Grape"];

// ============================================================================
// STEP 16.2 - REMOVE AN ITEM USING filter()
// ============================================================================
//
// We want to remove "Banana".
//
// filter() goes through every item in the array.
//
// The condition:
//
//     item !== "Banana"
//
// means:
//
//     "Keep the item if it is NOT Banana."
//
// ============================================================================

const filteredArray = originalArray.filter((item) => item !== "Banana");

// ============================================================================
// STEP 16.3 - TEST filter()
// ============================================================================

function testFilter() {
  const output = document.getElementById("remove-output");

  // ---------------------------------------------------------------
  // Check whether the arrays are the same object
  // ---------------------------------------------------------------

  const sameReference = originalArray === filteredArray;

  // ---------------------------------------------------------------
  // Display the results
  // ---------------------------------------------------------------

  output.textContent =
    "ORIGINAL ARRAY:\n" +
    JSON.stringify(originalArray, null, 2) +
    "\n\n" +
    "FILTERED ARRAY:\n" +
    JSON.stringify(filteredArray, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "Notice that Banana was removed from the NEW array." +
    "\n\n" +
    "The original array was NOT changed:\n" +
    JSON.stringify(originalArray, null, 2);
}

// ============================================================================
// STEP 16.4 - REDUX ACTION TYPE
// ============================================================================

const REMOVE_ITEM = "REMOVE_ITEM";

// ============================================================================
// STEP 16.5 - INITIAL REDUX STATE
// ============================================================================

const initialState = ["Apple", "Banana", "Orange", "Grape"];

// ============================================================================
// STEP 16.6 - REDUX REDUCER
// ============================================================================
//
// The reducer receives:
//
//     state
//
// and:
//
//     action
//
// When REMOVE_ITEM is dispatched, filter() creates a NEW array.
//
// We do NOT use:
//
//     state.splice()
//
// because splice() changes the original array.
//
// ============================================================================

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // REMOVE ITEM
    // ---------------------------------------------------------------

    case REMOVE_ITEM:
      return state.filter((item) => item !== action.item);

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 16.7 - ACTION CREATOR
// ============================================================================

const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,

    item: item,
  };
};

// ============================================================================
// STEP 16.8 - CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(arrayReducer);

// ============================================================================
// STEP 16.9 - TEST REMOVING AN ITEM WITH REDUX
// ============================================================================

function testReduxRemove() {
  const output = document.getElementById("remove-output");

  // ---------------------------------------------------------------
  // Get the current Redux state
  // ---------------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------------
  // Save a reference to the original state array
  // ---------------------------------------------------------------

  const originalReference = before;

  // ---------------------------------------------------------------
  // Create the action
  // ---------------------------------------------------------------

  const action = removeItem("Banana");

  // ---------------------------------------------------------------
  // Dispatch the action
  // ---------------------------------------------------------------

  store.dispatch(action);

  // ---------------------------------------------------------------
  // Get the new Redux state
  // ---------------------------------------------------------------

  const after = store.getState();

  // ---------------------------------------------------------------
  // Compare the array references
  // ---------------------------------------------------------------

  const sameReference = originalReference === after;

  // ---------------------------------------------------------------
  // Display the results
  // ---------------------------------------------------------------

  output.textContent =
    "REDUX STATE BEFORE:\n" +
    JSON.stringify(before, null, 2) +
    "\n\n" +
    "ACTION:\n" +
    JSON.stringify(action, null, 2) +
    "\n\n" +
    "REDUX STATE AFTER:\n" +
    JSON.stringify(after, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The reducer used:\n" +
    "state.filter(item => item !== action.item)" +
    "\n\n" +
    "The original array was not mutated.\n" +
    "Redux received a NEW array as the new state.";
}
