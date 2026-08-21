// ============================================================================
// REACT REDUX
// STEP 1 - REACT FILE
// ============================================================================
//
// This file contains our React code.
//
// The Redux store was created in:
//
//     redux.js
//
// We are now going to connect our React application to that Redux store.
//
// ============================================================================

// ============================================================================
// STEP 1.1 - CREATE THE REACT COMPONENT
// ============================================================================

function App() {
  return (
    <div className="redux-card">
      <h2>React + Redux</h2>

      <p>Our React application is now connected to a Redux store.</p>

      <div className="state-display">Redux Store Created</div>

      <div className="success">
        <strong>Step 1 Complete</strong>
        <br />
        <br />
        React has been loaded.
        <br />
        Redux has been loaded.
        <br />
        A Redux store has been created.
        <br />
        React Redux Provider has connected the store to the React application.
      </div>
    </div>
  );
}

// ============================================================================
// STEP 1.2 - CREATE THE REACT ROOT
// ============================================================================
//
// ReactDOM.createRoot() tells React where our application should be rendered.
//
// Our index.html contains:
//
//     <div id="root"></div>
//
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// STEP 1.3 - CONNECT REACT TO REDUX
// ============================================================================
//
// Provider comes from React Redux.
//
// Provider makes the Redux store available to React components
// inside the Provider.
//
// Notice:
//
//     store
//
// comes from our separate redux.js file.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
);
