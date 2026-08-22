// ============================================================================
// REACT REDUX
// STEP 3 - REDUX FILE
// EXTRACT STATE LOGIC TO REDUX
// ============================================================================
//
// In Step 2, the counter was managed inside the React component:
//
//     useState()
//     setCount()
//
// In Step 3, we are moving that state logic into Redux.
//
// Redux will now be responsible for:
//
//     1. Storing the counter state
//     2. Defining the actions
//     3. Updating the state through the reducer
//     4. Providing the Redux store
//
// React will be responsible for:
//
//     1. Displaying the state
//     2. Dispatching actions when buttons are clicked
//
// ============================================================================

// ============================================================================
// STEP 3.1 - ACTION TYPES
// ============================================================================

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const RESET = "RESET";

// ============================================================================
// STEP 3.2 - INITIAL STATE
// ============================================================================
//
// This replaces the:
//
//     useState(0)
//
// we used in Step 2.
//
// ============================================================================

const initialState = 0;

// ============================================================================
// STEP 3.3 - REDUCER
// ============================================================================
//
// The reducer contains the logic for changing the state.
//
// Instead of React doing:
//
//     setCount(count + 1)
//
// Redux now does:
//
//     state + 1
//
// ============================================================================

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------------------------------------------------------
    // INCREMENT
    // ---------------------------------------------------------------

    case INCREMENT:
      return state + 1;

    // ---------------------------------------------------------------
    // DECREMENT
    // ---------------------------------------------------------------

    case DECREMENT:
      return state - 1;

    // ---------------------------------------------------------------
    // RESET
    // ---------------------------------------------------------------

    case RESET:
      return 0;

    // ---------------------------------------------------------------
    // DEFAULT
    // ---------------------------------------------------------------

    default:
      return state;
  }
};

// ============================================================================
// STEP 3.4 - ACTION CREATORS
// ============================================================================

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

// ============================================================================
// STEP 3.5 - CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(counterReducer);
