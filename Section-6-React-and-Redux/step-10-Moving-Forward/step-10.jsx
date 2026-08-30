// ============================================================================
// REACT REDUX
// STEP 10 - REACT FILE
// MOVING FORWARD FROM HERE
// ============================================================================
//
// This step demonstrates the complete basic Redux + React workflow.
//
// ============================================================================

// ============================================================================
// GET connect()
// ============================================================================

const { connect } = ReactRedux;

// ============================================================================
// MAP STATE TO PROPS
// ============================================================================
//
// Redux state:
//
// {
//   count: 0,
//   messages: []
// }
//
//
//
// We make both pieces of state available to React:
//
//     props.count
//     props.messages
//
// ============================================================================

const mapStateToProps = (state) => {
  return {
    count: state.count,

    messages: state.messages,
  };
};

// ============================================================================
// MAP DISPATCH TO PROPS
// ============================================================================
//
// Redux actions are made available to the component
// through props.
//
// ============================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    // ========================================================================
    // INCREMENT
    // ========================================================================

    increment: () => {
      dispatch(increment());
    },

    // ========================================================================
    // DECREMENT
    // ========================================================================

    decrement: () => {
      dispatch(decrement());
    },

    // ========================================================================
    // ADD MESSAGE
    // ========================================================================

    addMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

// ============================================================================
// APP COMPONENT
// ============================================================================

function App(props) {
  // ========================================================================
  // ADD MESSAGE
  // ========================================================================

  const handleAddMessage = () => {
    const input = document.getElementById("message-input");

    const message = input.value.trim();

    if (message === "") {
      return;
    }

    props.addMessage(message);

    input.value = "";
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="app">
      <h2>Redux + React Application</h2>

      <p>
        This component receives Redux state and Redux actions through props.
      </p>

      {/* 
      <!-- =====================================================
           COUNTER
           ===================================================== --> */}

      <div className="counter">
        <h3>Counter</h3>

        <div className="counter-value">{props.count}</div>

        <button onClick={props.decrement}>− Decrement</button>

        <button onClick={props.increment}>+ Increment</button>
      </div>

      {/* <!-- =====================================================
           MESSAGES
           ===================================================== --> */}

      <div className="messages">
        <h3>Messages</h3>

        <input id="message-input" type="text" placeholder="Enter a message" />

        <button onClick={handleAddMessage}>Add Message</button>

        <div>
          {props.messages.map((message, index) => (
            <div className="message" key={index}>
              {message}
            </div>
          ))}
        </div>
      </div>

      {/* <!-- =====================================================
           COMPLETE DATA FLOW
           ===================================================== --> */}

      <div className="explanation">
        <strong>Complete Redux Data Flow</strong>
        <br />
        <br />
        <strong>1. User interacts with React</strong>
        <br />
        The user clicks a button or enters a message.
        <br />
        <br />
        <strong>2. React calls an action function</strong>
        <br />
        For example:
        <br />
        <br />
        <code>props.increment()</code>
        <br />
        <br />
        <strong>3. An action is dispatched</strong>
        <br />
        React Redux sends the action to Redux.
        <br />
        <br />
        <strong>4. The reducer processes the action</strong>
        <br />
        The reducer creates a new state.
        <br />
        <br />
        <strong>5. Redux updates the store</strong>
        <br />
        The Redux store now contains the updated state.
        <br />
        <br />
        <strong>6. React receives the new state</strong>
        <br />
        <code>mapStateToProps()</code>
        provides the updated data through props.
        <br />
        <br />
        <strong>7. React re-renders</strong>
        <br />
        The UI displays the updated information.
      </div>
    </div>
  );
}

// ============================================================================
// CONNECT APP TO REDUX
// ============================================================================

const ConnectedApp = connect(
  mapStateToProps,

  mapDispatchToProps,
)(App);

// ============================================================================
// CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// PROVIDER
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>,
);
