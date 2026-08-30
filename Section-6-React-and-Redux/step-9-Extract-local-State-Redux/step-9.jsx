// ============================================================================
// REACT REDUX
// STEP 9 - REACT FILE
// EXTRACT LOCAL STATE INTO REDUX
// ============================================================================
//
// Before Redux:
//
//     const [messages, setMessages] = useState([...]);
//
// After moving the state to Redux:
//
//     Redux Store
//          ↓
//     mapStateToProps()
//          ↓
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
// Redux contains:
//
//     state.messages
//
// We make that value available to the React component as:
//
//     props.messages
//
// ============================================================================

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

// ============================================================================
// MAP DISPATCH TO PROPS
// ============================================================================
//
// This gives the React component a function called:
//
//     props.addMessage()
//
// That function dispatches the Redux action.
//
// ============================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

// ============================================================================
// MESSAGES COMPONENT
// ============================================================================
//
// IMPORTANT:
//
// There is NO useState() for messages here.
//
// Redux owns the messages.
//
// ============================================================================

function Messages(props) {
  // ========================================================================
  // ADD A MESSAGE
  // ========================================================================

  const handleAddMessage = () => {
    const message = document.getElementById("message-input").value;

    if (message.trim() === "") {
      return;
    }

    props.addMessage(message);

    document.getElementById("message-input").value = "";
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="messages-app">
      <h2>Messages App</h2>

      <p>The messages are stored in Redux instead of local React state.</p>

      {/* <!-- =====================================================
           ADD MESSAGE
           ===================================================== --> */}

      <input id="message-input" type="text" placeholder="Enter a message" />

      <button onClick={handleAddMessage}>Add Message</button>

      {/* 
      <!-- =====================================================
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

      {/* 
      <!-- =====================================================
           EXPLANATION
           ===================================================== --> */}

      <div className="explanation">
        <strong>Where does the message data live?</strong>
        <br />
        <br />
        The Redux store contains:
        <br />
        <br />
        <code>state.messages</code>
        <br />
        <br />
        <code>mapStateToProps()</code>
        maps that state to:
        <br />
        <br />
        <code>props.messages</code>
        <br />
        <br />
        When the button is clicked,
        <code>props.addMessage()</code>
        dispatches an action to Redux.
        <br />
        <br />
        The reducer creates a new state containing the new message.
      </div>
    </div>
  );
}

// ============================================================================
// CONNECT THE COMPONENT TO REDUX
// ============================================================================
//
// We are using BOTH:
//
//     mapStateToProps()
//     mapDispatchToProps()
//
// ============================================================================

const ConnectedMessages = connect(
  mapStateToProps,

  mapDispatchToProps,
)(Messages);

// ============================================================================
// CREATE REACT ROOT
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// ============================================================================
// PROVIDER
// ============================================================================

root.render(
  <ReactRedux.Provider store={store}>
    <ConnectedMessages />
  </ReactRedux.Provider>,
);
