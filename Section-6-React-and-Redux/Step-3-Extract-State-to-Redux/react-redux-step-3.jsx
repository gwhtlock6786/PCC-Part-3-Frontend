// ============================================================================
// REACT REDUX
// STEP 3 - REACT FILE
// EXTRACT STATE LOGIC TO REDUX
// ============================================================================
//
// In Step 2:
//
//     React owned the state.
//
//     useState()
//     setCount()
//
// In Step 3:
//
//     Redux owns the state.
//
//     useSelector()
//     useDispatch()
//
// The React component's job is now primarily:
//
//     Display the state
//     ↓
//     Dispatch actions
//
// ============================================================================

// ============================================================================
// STEP 3.1 - GET REACT REDUX HOOKS
// ============================================================================
//
// useSelector()
//     ↓
// Reads state from Redux.
//
// useDispatch()
//     ↓
// Sends actions to Redux.
//
// ============================================================================

const { useSelector, useDispatch } = ReactRedux;

// ============================================================================
// STEP 3.2 - CREATE THE REACT COMPONENT
// ============================================================================

function App() {
  // ========================================================================
  // READ STATE FROM REDUX
  // ========================================================================
  //
  // useSelector() allows the component to read data from the Redux store.
  //
  // The function:
  //
  //     state => state
  //
  // means:
  //
  //     "Give me the current Redux state."
  //
  // ========================================================================

  const count = useSelector((state) => state);

  // ========================================================================
  // GET THE DISPATCH FUNCTION
  // ========================================================================
  //
  // dispatch() sends an action to Redux.
  //
  // ========================================================================

  const dispatch = useDispatch();

  // ========================================================================
  // INCREMENT
  // ========================================================================

  const handleIncrement = () => {
    dispatch(increment());
  };

  // ========================================================================
  // DECREMENT
  // ========================================================================

  const handleDecrement = () => {
    dispatch(decrement());
  };

  // ========================================================================
  // RESET
  // ========================================================================

  const handleReset = () => {
    dispatch(reset());
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="state-card">
      <h2>Redux Counter</h2>

      <p>The counter is now managed by Redux.</p>

      {/* <!-- ================================================================
           CURRENT REDUX STATE
           ================================================================ --> */}

      <div className="state-display">Count: {count}</div>

      {/* <!-- ================================================================
           BUTTONS
           ================================================================ --> */}

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleReset}>Reset</button>

      {/* <!-- ================================================================
           EXPLANATION
           ================================================================ --> */}

      <div className="explanation">
        <strong>What changed from Step 2?</strong>
        <br />
        <br />
        Step 2 used:
        <br />
        <br />
        <code>useState()</code>
        <br />
        <br />
        Step 3 uses:
        <br />
        <br />
        <code>useSelector()</code>
        to read Redux state.
        <br />
        <br />
        And:
        <br />
        <br />
        <code>useDispatch()</code>
        to send actions to Redux.
      </div>
    </div>
  );
}

// ============================================================================
// STEP 3.3 - CREATE THE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// STEP 3.4 - PROVIDE THE REDUX STORE TO REACT
// ============================================================================
//
// Provider makes the Redux store available to App.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
);
