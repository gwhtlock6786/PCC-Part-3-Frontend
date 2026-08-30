// ============================================================================
// REACT REDUX
// STEP 9 - REDUX FILE
// EXTRACT LOCAL STATE INTO REDUX
// ============================================================================

// ============================================================================
// ACTION TYPE
// ============================================================================

const ADD_MESSAGE = "ADD_MESSAGE";

// ============================================================================
// INITIAL STATE
// ============================================================================
//
// Instead of the React component having:
//
//     const [messages, setMessages] = useState(...)
//
// Redux now owns the messages.
//
// ============================================================================

const initialState = {
  messages: [
    "Welcome to the Messages App!",

    "This message is now stored in Redux.",

    "The React component receives these messages through props.",
  ],
};

// ============================================================================
// ACTION CREATOR
// ============================================================================

const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,

    message: message,
  };
};

// ============================================================================
// REDUCER
// ============================================================================

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,

        messages: [...state.messages, action.message],
      };

    default:
      return state;
  }
};

// ============================================================================
// CREATE REDUX STORE
// ============================================================================

const store = Redux.createStore(messagesReducer);
