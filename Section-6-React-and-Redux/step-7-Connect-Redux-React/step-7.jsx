// ============================================================================
// REACT REDUX
// STEP 7 - CONNECT REDUX TO REACT
// ============================================================================
//
// This step demonstrates how to connect a React component
// to the Redux store using connect().
//
// ============================================================================

// ============================================================================
// GET connect() FROM REACT REDUX
// ============================================================================

const { connect } = ReactRedux;

// ============================================================================
// MAP STATE TO PROPS
// ============================================================================
//
// mapStateToProps receives the Redux state.
//
// It then returns the data that we want to make available
// to our React component through props.
//
// ============================================================================

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

// ============================================================================
// REACT COMPONENT
// ============================================================================
//
// Notice that this component does not directly access the Redux store.
//
// It receives the Redux data through props.
//
// ============================================================================

function App(props) {
  return (
    <div className="state-card">
      <h2>React Component</h2>

      <p>This component is connected to the Redux store.</p>

      <div className="state-display">{props.message}</div>

      <div className="explanation">
        <strong>What just happened?</strong>
        <br />
        <br />
        Redux contains:
        <br />
        <br />
        <code>message: "Hello from Redux!"</code>
        <br />
        <br />
        <code>mapStateToProps()</code>
        takes that Redux state and makes
        <code>message</code> available to the React component as a prop.
        <br />
        <br />
        The component can then access it using:
        <br />
        <br />
        <code>props.message</code>
      </div>
    </div>
  );
}

// ============================================================================
// CONNECT REACT TO REDUX
// ============================================================================
//
// connect() creates a new React component that is connected
// to the Redux store.
//
// ============================================================================

const ConnectedApp = connect(mapStateToProps)(App);

// ============================================================================
// CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// PROVIDER
// ============================================================================
//
// Provider gives the React component tree access to the Redux store.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>,
);
