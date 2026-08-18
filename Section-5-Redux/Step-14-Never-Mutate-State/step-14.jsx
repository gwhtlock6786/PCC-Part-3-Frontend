// ============================================================================
// STEP 14
// NEVER MUTATE STATE
// ============================================================================
//
// Redux state should never be changed directly.
//
// DON'T do this:
//
//     state.push(action.todo);
//
// Instead, create a NEW array:
//
//     return [...state, action.todo];
//
// This is called IMMUTABILITY.
//
// ============================================================================

// ============================================================================
// STEP 14.1 - ACTION TYPE
// ============================================================================

const ADD_TODO = "ADD_TODO";

// ============================================================================
// STEP 14.2 - INITIAL TODO LIST
// ============================================================================
//
// This array represents our starting Redux state.
//
// ============================================================================

const initialTodos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

// ============================================================================
// STEP 14.3 - REDUCER
// ============================================================================
//
// The reducer receives the current state and an action.
//
// When ADD_TODO is dispatched, we need to add a new todo.
//
// IMPORTANT:
//
// We do NOT use:
//
//     state.push(action.todo)
//
// because push() changes the existing array.
//
// Instead, we use:
//
//     [...state, action.todo]
//
// which creates a completely NEW array.
//
// ============================================================================

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // ADD TODO
    // ---------------------------------------------------------------

    case ADD_TODO:
      return [...state, action.todo];

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 14.4 - ACTION CREATOR
// ============================================================================
//
// This creates the ADD_TODO action.
//
// ============================================================================

const addTodo = (todo) => {
  return {
    type: ADD_TODO,

    todo: todo,
  };
};

// ============================================================================
// STEP 14.5 - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(todoReducer);

// ============================================================================
// STEP 14.6 - TEST IMMUTABLE STATE
// ============================================================================
//
// This function demonstrates what happens when we add a todo.
//
// ============================================================================

function testImmutableState() {
  const output = document.getElementById("immutable-output");

  // ---------------------------------------------------------------
  // GET THE CURRENT STATE
  // ---------------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------------
  // SAVE A REFERENCE TO THE ORIGINAL ARRAY
  // ---------------------------------------------------------------

  const originalReference = before;

  // ---------------------------------------------------------------
  // CREATE THE ACTION
  // ---------------------------------------------------------------

  const action = addTodo("Practice Redux");

  // ---------------------------------------------------------------
  // DISPATCH THE ACTION
  // ---------------------------------------------------------------

  store.dispatch(action);

  // ---------------------------------------------------------------
  // GET THE NEW STATE
  // ---------------------------------------------------------------

  const after = store.getState();

  // ---------------------------------------------------------------
  // CHECK WHETHER THE ARRAY IS THE SAME OBJECT
  // ---------------------------------------------------------------

  const sameArray = originalReference === after;

  // ---------------------------------------------------------------
  // DISPLAY THE RESULTS
  // ---------------------------------------------------------------

  output.textContent =
    "STATE BEFORE:\n" +
    JSON.stringify(before, null, 2) +
    "\n\n" +
    "ACTION:\n" +
    JSON.stringify(action, null, 2) +
    "\n\n" +
    "STATE AFTER:\n" +
    JSON.stringify(after, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameArray +
    "\n\n" +
    "A new array was created because the reducer used:\n" +
    "[...state, action.todo]";
}

// ============================================================================
// STEP 14.7 - TEST THE ARRAY REFERENCE
// ============================================================================
//
// This makes the immutability concept even easier to see.
//
// ============================================================================

function testReference() {
  const output = document.getElementById("immutable-output");

  // ---------------------------------------------------------------
  // GET THE CURRENT STATE
  // ---------------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------------
  // CREATE A NEW ARRAY MANUALLY
  // ---------------------------------------------------------------

  const newArray = [...before, "Study JavaScript"];

  // ---------------------------------------------------------------
  // COMPARE THE TWO ARRAYS
  // ---------------------------------------------------------------

  const sameReference = before === newArray;

  // ---------------------------------------------------------------
  // DISPLAY THE RESULTS
  // ---------------------------------------------------------------

  output.textContent =
    "ORIGINAL ARRAY:\n" +
    JSON.stringify(before, null, 2) +
    "\n\n" +
    "NEW ARRAY:\n" +
    JSON.stringify(newArray, null, 2) +
    "\n\n" +
    "SAME ARRAY REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The result is false because the spread operator created\n" +
    "a completely new array.";
}

// ============================================================================
// INITIAL STATE
// ============================================================================
//
// Show the initial Redux state when the page loads.
//
// ============================================================================

const initialState = store.getState();

document.getElementById("immutable-output").textContent =
  "INITIAL REDUX STATE:\n" +
  JSON.stringify(initialState, null, 2) +
  "\n\n" +
  "Click 'Add Todo' to see Redux create a new state array.";
