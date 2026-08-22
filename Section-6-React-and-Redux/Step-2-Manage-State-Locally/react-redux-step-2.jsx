// ============================================================================
// REACT REDUX
// STEP 2 - MANAGE STATE LOCALLY FIRST
// ============================================================================
//
// This step teaches an important React + Redux concept:
//
//     NOT ALL STATE BELONGS IN REDUX.
//
// React components can manage their own local state using:
//
//     useState()
//
// If the state is only needed by one component, keeping it local is often
// simpler than putting it into a global Redux store.
//
// ============================================================================

// ============================================================================
// STEP 2.1 - GET useState FROM REACT
// ============================================================================
//
// React is available globally because we loaded React through the CDN.
//
// We can access useState through:
//
//     React.useState
//
// ============================================================================

const { useState } = React;

// ============================================================================
// STEP 2.2 - CREATE THE COMPONENT
// ============================================================================

function App() {
  // ========================================================================
  // LOCAL STATE
  // ========================================================================
  //
  // useState() creates a piece of state that belongs to this component.
  //
  // The initial value is:
  //
  //     0
  //
  // React gives us two things:
  //
  //     count
  //         ↓
  //     Current state value
  //
  //
  //     setCount
  //         ↓
  //     Function used to update the state
  //
  // ========================================================================

  const [count, setCount] = useState(0);

  // ========================================================================
  // INCREMENT THE LOCAL STATE
  // ========================================================================

  const increment = () => {
    setCount(count + 1);
  };

  // ========================================================================
  // DECREMENT THE LOCAL STATE
  // ========================================================================

  const decrement = () => {
    setCount(count - 1);
  };

  // ========================================================================
  // RESET THE LOCAL STATE
  // ========================================================================

  const reset = () => {
    setCount(0);
  };

  // ========================================================================
  // RETURN THE COMPONENT
  // ========================================================================

  return (
    <div className="state-card">
      <h2>Local React State</h2>

      <p>This counter is managed entirely by React.</p>

      {/* <!-- ================================================================
           CURRENT STATE
           ================================================================ --> */}

      <div className="state-display">Count: {count}</div>

      {/* <!-- ================================================================
           BUTTONS
           ================================================================ --> */}

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

      {/* <!-- ================================================================
           EXPLANATION
           ================================================================ --> */}

      <div className="explanation">
        <strong>Where is this state stored?</strong>
        <br />
        <br />
        The state is stored locally inside the
        <code>App</code>
        component using:
        <br />
        <br />
        <code>const [count, setCount] = useState(0);</code>
        <br />
        <br />
        This state does NOT need Redux because this example only has one
        component that needs the value.
        <br />
        <br />
        <strong>React manages it.</strong>
      </div>
    </div>
  );
}

// ============================================================================
// STEP 2.3 - CREATE THE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// STEP 2.4 - RENDER THE APPLICATION
// ============================================================================
//
// Notice that we don't need Redux Provider here.
//
// Why?
//
// Because this particular component is not using Redux.
//
// ============================================================================

root.render(<App />);
