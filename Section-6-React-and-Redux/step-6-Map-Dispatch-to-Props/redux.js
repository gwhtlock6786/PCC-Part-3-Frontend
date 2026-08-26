// ============================================================================
// REACT REDUX
// STEP 6 - REDUX FILE
// MAP DISPATCH TO PROPS
// ============================================================================
//
// This file contains:
//
//     1. Action types
//     2. Action creators
//     3. Initial state
//     4. Reducer
//     5. Redux store
//
// React will use mapDispatchToProps() to dispatch these actions.
//
// ============================================================================

// ============================================================================
// ACTION TYPES
// ============================================================================

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const RESET = "RESET";

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState = 0;

// ============================================================================
// ACTION CREATORS
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
// REDUCER
// ============================================================================

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

// ============================================================================
// CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(counterReducer);
