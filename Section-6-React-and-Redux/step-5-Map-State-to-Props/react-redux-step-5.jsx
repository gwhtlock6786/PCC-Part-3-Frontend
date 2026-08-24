// ============================================================================
// REACT REDUX
// STEP 5 - REACT FILE
// MAP STATE TO PROPS
// ============================================================================
//
// This step introduces:
//
//     mapStateToProps()
//
// mapStateToProps() takes state from Redux and converts it into props
// that can be used by a React component.
//
// ============================================================================

// ============================================================================
// STEP 5.1 - GET connect()
// ============================================================================
//
// connect() is the older React Redux API used to connect a React component
// to the Redux store.
//
// ============================================================================

const { connect } = ReactRedux;

// ============================================================================
// STEP 5.2 - MAP STATE TO PROPS
// ============================================================================
//
// This function receives the entire Redux state.
//
// It returns an object.
//
// The properties in that object become props on the React component.
//
// ============================================================================

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

// ============================================================================
// STEP 5.3 - CREATE THE REACT COMPONENT
// ============================================================================
//
// Notice that this component does NOT call:
//
//     useSelector()
//
// Instead, Redux will give the component the count through props.
//
// ============================================================================

function Counter(props) {
  return (
    <div className="state-card">
      <h2>Redux State as Props</h2>

      <p>The Redux state has been mapped to a React component prop.</p>

      {/* 
      <!-- ================================================================
           STATE FROM PROPS
           ================================================================ --> */}

      <div className="state-display">Count from Props: {props.count}</div>

      {/* <!-- ================================================================
           EXPLANATION
           ================================================================ --> */}

      <div className="explanation">
        <strong>How did the component get this value?</strong>
        <br />
        <br />
        Redux contains:
        <br />
        <br />
        <code>state = {props.count}</code>
        <br />
        <br />
        <code>mapStateToProps()</code>
        takes that Redux state and returns:
        <br />
        <br />
        <code>&#123; count: state &#125;</code>
        <br />
        <br />
        React Redux then provides
        <code>count</code>
        to the component as a prop.
      </div>
    </div>
  );
}

// ============================================================================
// STEP 5.4 - CONNECT THE COMPONENT TO REDUX
// ============================================================================
//
// connect() connects our React component to the Redux store.
//
//
//
// The first argument:
//
//     mapStateToProps
//
// tells React Redux which Redux state should become props.
//
//
//
// The second argument is omitted for now because this step is only
// about mapping state to props.
//
// ============================================================================

const ConnectedCounter = connect(mapStateToProps)(Counter);

// ============================================================================
// STEP 5.5 - CREATE THE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// STEP 5.6 - PROVIDER
// ============================================================================
//
// Provider gives the connected component access to the Redux store.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedCounter />
  </ReactRedux.Provider>,
);
