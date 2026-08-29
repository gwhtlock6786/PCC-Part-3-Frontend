// ============================================================================
// REACT REDUX
// STEP 8 - REACT FILE
// CONNECT REDUX TO THE MESSAGES APP
// ============================================================================
//
// Redux contains:
//
//     messages
//
// React receives:
//
//     props.messages
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
// The Redux state looks like:
//
// {
//   messages: [
//     "Welcome to the Messages App!",
//     "This message is stored in Redux.",
//     "React is receiving these messages through props."
//   ]
// }
//
//
//
// We return:
//
// {
//   messages: state.messages
// }
//
//
//
// React Redux will then provide messages to the component
// through props.
//
// ============================================================================

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

// ============================================================================
// MESSAGES COMPONENT
// ============================================================================
//
// The component receives messages through props.
//
// It does NOT directly access the Redux store.
//
// ============================================================================

function Messages(props) {
  return (
    <div className="messages-app">
      <h2>Messages</h2>

      <p>These messages are coming from the Redux store.</p>

      {/* <!-- =====================================================
           MESSAGE LIST
           ===================================================== --> */}

      <div className="messages-list">
        {props.messages.map((message, index) => (
          <div className="message" key={index}>
            <div className="message-number">Message {index + 1}</div>

            <div>{message}</div>
          </div>
        ))}
      </div>

      {/* <!-- =====================================================
           EXPLANATION
           ===================================================== --> */}

      <div className="explanation">
        <strong>How is the Messages component getting the data?</strong>
        <br />
        <br />
        Redux stores the messages:
        <br />
        <br />
        <code>state.messages</code>
        <br />
        <br />
        <code>mapStateToProps()</code>
        takes those messages and returns:
        <br />
        <br />
        <code>messages: state.messages</code>
        <br />
        <br />
        React Redux then makes the messages available to the component as:
        <br />
        <br />
        <code>props.messages</code>
        <br />
        <br />
        The component can then use
        <code>map()</code>
        to display each message.
      </div>
    </div>
  );
}

// ============================================================================
// CONNECT THE MESSAGES COMPONENT TO REDUX
// ============================================================================
//
// connect() creates a new component that is connected
// to the Redux store.
//
// ============================================================================

const ConnectedMessages = connect(mapStateToProps)(Messages);

// ============================================================================
// CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// PROVIDER
// ============================================================================
//
// Provider makes the Redux store available to the
// connected component.
//
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedMessages />
  </ReactRedux.Provider>,
);
