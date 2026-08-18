// ============================================================================
// STEP 17
// COPY AN OBJECT WITH OBJECT.ASSIGN
// ============================================================================
//
// In the previous exercises:
//
//     Step 14 - We learned not to mutate arrays.
//
//     Step 15 - We learned how to create new arrays with:
//
//                   [...state, newItem]
//
//     Step 16 - We learned how to create new arrays with:
//
//                   state.filter(...)
//
// Now we are going to work with OBJECTS.
//
// Redux state can contain objects, so we also need a way to create
// NEW objects instead of modifying existing objects.
//
// One way to do that is:
//
//     Object.assign()
//
// ============================================================================

// ============================================================================
// STEP 17.1 - ORIGINAL OBJECT
// ============================================================================

const originalUser = {
  name: "John",

  age: 30,

  loggedIn: false,
};

// ============================================================================
// STEP 17.2 - COPY THE OBJECT
// ============================================================================
//
// Object.assign() copies the properties from one object into another.
//
// The first argument:
//
//     {}
//
// is an empty object.
//
// The second argument:
//
//     originalUser
//
// provides the properties we want to copy.
//
// ============================================================================

const copiedUser = Object.assign({}, originalUser);

// ============================================================================
// STEP 17.3 - TEST OBJECT.ASSIGN()
// ============================================================================

function testObjectAssign() {
  const output = document.getElementById("object-output");

  // ---------------------------------------------------------------
  // Check whether the two objects are the same object
  // ---------------------------------------------------------------

  const sameReference = originalUser === copiedUser;

  // ---------------------------------------------------------------
  // Display the results
  // ---------------------------------------------------------------

  output.textContent =
    "ORIGINAL OBJECT:\n" +
    JSON.stringify(originalUser, null, 2) +
    "\n\n" +
    "COPIED OBJECT:\n" +
    JSON.stringify(copiedUser, null, 2) +
    "\n\n" +
    "SAME OBJECT REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The objects contain the same properties,\n" +
    "but they are different objects.";
}

// ============================================================================
// STEP 17.4 - CREATE A NEW OBJECT AND CHANGE A PROPERTY
// ============================================================================
//
// Object.assign() can also copy an object AND replace a property.
//
// Example:
//
//     Object.assign(
//       {},
//       originalUser,
//       { loggedIn: true }
//     );
//
// The later object wins when the same property exists.
//
// ============================================================================

const loggedInUser = Object.assign(
  {},

  originalUser,

  {
    loggedIn: true,
  },
);

// ============================================================================
// STEP 17.5 - REDUX ACTION TYPE
// ============================================================================

const LOGIN_USER = "LOGIN_USER";

// ============================================================================
// STEP 17.6 - INITIAL REDUX STATE
// ============================================================================

const initialState = {
  name: "John",

  age: 30,

  loggedIn: false,
};

// ============================================================================
// STEP 17.7 - REDUX REDUCER
// ============================================================================
//
// When LOGIN_USER is dispatched, we want to change:
//
//     loggedIn: false
//
// to:
//
//     loggedIn: true
//
// But we DON'T want to directly modify:
//
//     state.loggedIn = true
//
// Instead, we create a NEW object with Object.assign().
//
// ============================================================================

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // LOGIN USER
    // ---------------------------------------------------------------

    case LOGIN_USER:
      return Object.assign(
        {},

        state,

        {
          loggedIn: true,
        },
      );

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 17.8 - ACTION CREATOR
// ============================================================================

const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};

// ============================================================================
// STEP 17.9 - CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(userReducer);

// ============================================================================
// STEP 17.10 - TEST OBJECT.ASSIGN() WITH REDUX
// ============================================================================

function testReduxObject() {
  const output = document.getElementById("object-output");

  // ---------------------------------------------------------------
  // Get the current Redux state
  // ---------------------------------------------------------------

  const before = store.getState();

  // ---------------------------------------------------------------
  // Save the original object reference
  // ---------------------------------------------------------------

  const originalReference = before;

  // ---------------------------------------------------------------
  // Create the LOGIN_USER action
  // ---------------------------------------------------------------

  const action = loginUser();

  // ---------------------------------------------------------------
  // Dispatch the action
  // ---------------------------------------------------------------

  store.dispatch(action);

  // ---------------------------------------------------------------
  // Get the new Redux state
  // ---------------------------------------------------------------

  const after = store.getState();

  // ---------------------------------------------------------------
  // Check whether Redux is using a new object
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
    "SAME OBJECT REFERENCE?\n" +
    sameReference +
    "\n\n" +
    "The reducer used:\n" +
    "Object.assign({}, state, { loggedIn: true })" +
    "\n\n" +
    "The original state object was not mutated.\n" +
    "Redux received a NEW object as the new state.";
}
