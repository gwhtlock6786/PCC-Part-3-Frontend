// ============================================================================
// REACT REDUX
// STEP 4 - REACT FILE
// USE PROVIDER TO CONNECT REDUX TO REACT
// ============================================================================
//
// Provider comes from React Redux.
//
// Its job is to make the Redux store available to React components
// inside the Provider.
//
// ============================================================================

// ============================================================================
// GET REACT REDUX HOOKS
// ============================================================================

const { Provider, useSelector, useDispatch } = ReactRedux;

// ============================================================================
// APP COMPONENT
// ============================================================================

function App() {
  // ========================================================================
  // READ STATE FROM REDUX
  // ========================================================================

  const count = useSelector((state) => state);

  // ========================================================================
  // GET DISPATCH
  // ========================================================================

  const dispatch = useDispatch();

  // ========================================================================
  // INCREMENT
  // ========================================================================

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  // ========================================================================
  // DECREMENT
  // ========================================================================

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="redux-card">
      <h2>Redux Store Connected to React</h2>

      <p>
        The Redux store is being provided to this React component through{" "}
        <code>Provider</code>.
      </p>

      {/* 
      <!-- ================================================================
           CURRENT STATE
           ================================================================ --> */}

      <div className="state-display">Redux Count: {count}</div>

      {/* 
      <!-- ================================================================
           BUTTONS
           ================================================================ --> */}

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      {/* 
      <!-- ================================================================
           EXPLANATION
           ================================================================ --> */}

      <div className="explanation">
        <strong>The important part of this step:</strong>
        <br />
        <br />
        The Redux store is passed into:
        <br />
        <br />
        <code>&lt;Provider store=&#123;store&#125;&gt;</code>
        <br />
        <br />
        Components inside the Provider can then access the Redux store using
        React Redux tools such as <code>useSelector()</code> and
        <code>useDispatch()</code>.
        <br />
        <br />
        <strong>
          Provider creates the connection between the Redux store and the React
          component tree.
        </strong>
      </div>
    </div>
  );
}

// ============================================================================
// CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// PROVIDER
// ============================================================================
//
// This is the main lesson of Step 4.
//
// We pass our Redux store to Provider:
//
//     store={store}
//
// Everything inside Provider can access that store.
//
// ============================================================================

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
