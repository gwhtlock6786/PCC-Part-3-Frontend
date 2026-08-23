// ============================================================================
// REACT REDUX
// STEP 4 - REDUX FILE
// USE PROVIDER TO CONNECT REDUX TO REACT
// ============================================================================
//
// Redux is responsible for creating and managing the store.
//
// React Redux's Provider will connect this store to the React application.
//
// ============================================================================

// ============================================================================
// ACTION TYPES
// ============================================================================

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState = 0;

// ============================================================================
// REDUCER
// ============================================================================

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// ============================================================================
// CREATE THE REDUX STORE
// ============================================================================

const store = Redux.createStore(counterReducer);
