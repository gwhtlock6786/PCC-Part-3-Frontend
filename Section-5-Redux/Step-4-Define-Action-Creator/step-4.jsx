// ============================================================================
// REDUX PRACTICE
// STEP 4 - DEFINE AN ACTION CREATOR
// ============================================================================
//
// In Step 3, we created an action directly:
//
//     const action = {
//       type: "LOGIN",
//     };
//
// In this step, we are going to create a function that returns
// that action.
//
// This function is called an ACTION CREATOR.
//
// ============================================================================

// ============================================================================
// STEP 4A - CREATE AN ACTION
// ============================================================================
//
// This is the action that our action creator will return.
//
// ============================================================================

const action = {
  type: "LOGIN",
};

// ============================================================================
// STEP 4B - CREATE THE ACTION CREATOR
// ============================================================================
//
// An action creator is simply a function that returns an action.
//
// When we call:
//
//     actionCreator()
//
// the function returns:
//
//     {
//       type: "LOGIN"
//     }
//
// ============================================================================

function actionCreator() {
  return action;
}

// ============================================================================
// STEP 4C - TEST THE ACTION CREATOR
// ============================================================================
//
// This function is connected to the button in index.html.
//
// It calls the action creator and displays the action that
// the function returns.
//
// ============================================================================

function testActionCreator() {
  // Find the output <div> in index.html
  const output = document.getElementById("action-creator-output");

  // Call the action creator
  const createdAction = actionCreator();

  // Convert the returned action into readable JSON
  const formattedAction = JSON.stringify(createdAction, null, 2);

  // Display the result
  output.textContent = `Action Creator returned:\n\n${formattedAction}`;
}
