// ============================================================================
// REACT REDUX
// STEP 1 - REDUX FILE
// ============================================================================
//
// This file contains our Redux code.
//
// We are keeping the Redux code separate from the React code so that we can
// clearly see the responsibility of each part of the application.
//
// Redux is responsible for:
//
//     1. State
//     2. Reducers
//     3. Actions
//     4. Store
//
// React will be responsible for displaying the information.
//
// ============================================================================

// ============================================================================
// STEP 1.1 - ACTION TYPE
// ============================================================================

const INCREMENT = "INCREMENT";

// ============================================================================
// STEP 1.2 - REDUCER
// ============================================================================
//
// Our reducer controls a simple counter.
//
// The initial state is:
//
//     0
//
// ============================================================================

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
};

// ============================================================================
// STEP 1.3 - CREATE THE REDUX STORE
// ============================================================================
//
// Redux.createStore() creates our Redux store.
//
// The reducer tells the store how state should change.
//
// ============================================================================

const store = Redux.createStore(counterReducer);
