// ============================================================================
// REACT REDUX
// STEP 6 - REACT FILE
// MAP DISPATCH TO PROPS
// ============================================================================
//
// Step 5 taught:
//
//     mapStateToProps()
//
// which takes Redux state and provides it to a component as props.
//
//
//
// Step 6 teaches:
//
//     mapDispatchToProps()
//
// which provides functions to the component that can dispatch Redux actions.
//
// ============================================================================

// ============================================================================
// STEP 6.1 - GET connect()
// ============================================================================

const { connect } = ReactRedux;

// ============================================================================
// STEP 6.2 - MAP DISPATCH TO PROPS
// ============================================================================
//
// mapDispatchToProps() receives dispatch from Redux.
//
// We then create functions that dispatch our Redux actions.
//
// Those functions become props on the React component.
//
// ============================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    // ========================================================================
    // INCREMENT PROP
    // ========================================================================

    increment: () => {
      dispatch(increment());
    },

    // ========================================================================
    // DECREMENT PROP
    // ========================================================================

    decrement: () => {
      dispatch(decrement());
    },

    // ========================================================================
    // RESET PROP
    // ========================================================================

    reset: () => {
      dispatch(reset());
    },
  };
};

// ============================================================================
// STEP 6.3 - REACT COMPONENT
// ============================================================================
//
// Notice that this component doesn't call:
//
//     dispatch()
//
// directly.
//
// Instead, React receives functions through props:
//
//     props.increment()
//     props.decrement()
//     props.reset()
//
// ============================================================================

function Counter(props) {
  return (
    <div className="state-card">
      <h2>Dispatch Actions Through Props</h2>

      <p>
        Redux actions have been mapped to functions that are available to this
        component as props.
      </p>

      {/* <!-- ================================================================
           BUTTONS
           ================================================================ --> */}

      <button onClick={props.increment}>Increment</button>

      <button onClick={props.decrement}>Decrement</button>

      <button onClick={props.reset}>Reset</button>

      {/* 
      <!-- ================================================================
           EXPLANATION
           ================================================================ --> */}

      <div className="explanation">
        <strong>What does mapDispatchToProps() do?</strong>
        <br />
        <br />
        It takes the Redux <code>dispatch</code>
        function and creates functions that the React component can use.
        <br />
        <br />
        For example:
        <br />
        <br />
        <code>props.increment()</code>
        <br />
        <br />
        eventually causes:
        <br />
        <br />
        <code>dispatch(&#123; type: "INCREMENT" &#125;)</code>
        <br />
        <br />
        The action then goes to the Redux reducer, which updates the state.
      </div>
    </div>
  );
}

// ============================================================================
// STEP 6.4 - CONNECT THE COMPONENT TO REDUX
// ============================================================================
//
// connect() connects the React component to Redux.
//
// The first argument would normally be:
//
//     mapStateToProps
//
//
//
// But this exercise is specifically demonstrating
// mapDispatchToProps(), so we pass:
//
//     null
//
// for the first argument.
//
// ============================================================================

const ConnectedCounter = connect(
  null,

  mapDispatchToProps,
)(Counter);

// ============================================================================
// STEP 6.5 - CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// STEP 6.6 - PROVIDER
// ============================================================================
//
// Provider makes the Redux store available to the connected component.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedCounter />
  </ReactRedux.Provider>,
);
