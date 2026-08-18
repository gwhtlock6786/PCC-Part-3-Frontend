// ============================================================================
// STEP 15
// USE THE SPREAD OPERATOR ON ARRAYS
// ============================================================================
//
// The spread operator:
//
//     ...
//
// allows us to copy the values from one array into another array.
//
// Example:
//
//     const oldArray = ["A", "B", "C"];
//
//     const newArray = [...oldArray];
//
// The result is:
//
//     ["A", "B", "C"]
//
// But newArray is a DIFFERENT array.
//
// ============================================================================

// ============================================================================
// STEP 15.1 - ORIGINAL ARRAY
// ============================================================================

const originalArray = ["Apple", "Banana", "Orange"];

// ============================================================================
// STEP 15.2 - CREATE A COPY WITH THE SPREAD OPERATOR
// ============================================================================
//
// The spread operator takes each value from originalArray and
// places it into a NEW array.
//
// ============================================================================

const copiedArray = [...originalArray];

// ============================================================================
// STEP 15.3 - TEST THE BASIC SPREAD OPERATOR
// ============================================================================

function testSpreadOperator() {
  const output = document.getElementById("spread-output");

  // ---------------------------------------------------------------
  // COMPARE THE TWO ARRAYS
  // ---------------------------------------------------------------

  const sameReference = originalArray === copiedArray;

  // ---------------------------------------------------------------
  // DISPLAY THE RESULTS
  // ---------------------------------------------------------------

  output.textContent =
    "ORIGINAL ARRAY:\n" +
    JSON.stringify(originalArray, null, 2) +
    "\n\n" +
    "COPIED ARRAY:\n" +
    JSON.stringify(copiedArray, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The arrays contain the same values,\n" +
    "but they are different array objects.";
}

// ============================================================================
// STEP 15.4 - ADD AN ITEM USING THE SPREAD OPERATOR
// ============================================================================
//
// We can also use the spread operator to create a new array
// and add a new item at the same time.
//
// ============================================================================

function testAddItem() {
  const output = document.getElementById("spread-output");

  // ---------------------------------------------------------------
  // CREATE A NEW ARRAY
  // ---------------------------------------------------------------
  //
  // ...originalArray copies all of the original values.
  //
  // "Grape" is then added to the new array.
  //
  // ---------------------------------------------------------------

  const newArray = [...originalArray, "Grape"];

  // ---------------------------------------------------------------
  // CHECK WHETHER THE ARRAYS ARE THE SAME
  // ---------------------------------------------------------------

  const sameReference = originalArray === newArray;

  // ---------------------------------------------------------------
  // DISPLAY THE RESULTS
  // ---------------------------------------------------------------

  output.textContent =
    "ORIGINAL ARRAY:\n" +
    JSON.stringify(originalArray, null, 2) +
    "\n\n" +
    "NEW ARRAY:\n" +
    JSON.stringify(newArray, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The original array still contains only:\n" +
    JSON.stringify(originalArray) +
    "\n\n" +
    "The new array contains:\n" +
    JSON.stringify(newArray);
}

// ============================================================================
// STEP 15.5 - REDUX EXAMPLE
// ============================================================================
//
// Now let's connect the spread operator to Redux.
//
// Redux state should not be mutated.
//
// Instead of:
//
//     state.push(action.item)
//
// we can do:
//
//     return [...state, action.item]
//
// ============================================================================

// ============================================================================
// ACTION TYPE
// ============================================================================

const ADD_ITEM = "ADD_ITEM";

// ============================================================================
// INITIAL REDUX STATE
// ============================================================================

const initialState = ["Apple", "Banana", "Orange"];

// ============================================================================
// REDUCER
// ============================================================================

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // ADD ITEM
    // ---------------------------------------------------------------

    case ADD_ITEM:
      return [...state, action.item];

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// ACTION CREATOR
// ============================================================================

const addItem = (item) => {
  return {
    type: ADD_ITEM,

    item: item,
  };
};

// ============================================================================
// CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(arrayReducer);

// ============================================================================
// STEP 15.6 - REDUX SPREAD TEST
// ============================================================================

function testReduxSpread() {
  const output = document.getElementById("spread-output");

  // Get the state before dispatch

  const before = store.getState();

  // Dispatch an action

  store.dispatch(addItem("Grape"));

  // Get the new state

  const after = store.getState();

  // Check whether Redux created a new array

  const sameReference = before === after;

  // Display the results

  output.textContent =
    "REDUX STATE BEFORE:\n" +
    JSON.stringify(before, null, 2) +
    "\n\n" +
    "REDUX STATE AFTER:\n" +
    JSON.stringify(after, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The reducer used:\n" +
    "return [...state, action.item];" +
    "\n\n" +
    "That created a NEW array for the Redux state.";
}
