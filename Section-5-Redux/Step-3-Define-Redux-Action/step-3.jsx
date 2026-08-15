// ============================================================================
// REDUX PRACTICE
// STEP 3 - DEFINE A REDUX ACTION
// ============================================================================
//
// A Redux action is a JavaScript object.
//
// Actions describe something that happened.
//
// The most important property of a Redux action is:
//
//     type
//
// Example:
//
//     {
//       type: "LOGIN"
//     }
//
// ============================================================================

// ============================================================================
// STEP 3A - CREATE A REDUX ACTION
// ============================================================================
//
// Here we create an object representing a LOGIN action.
//
// The type property tells Redux what happened.
//
// ============================================================================

const action = {
  type: "LOGIN",
};

// ============================================================================
// STEP 3B - TEST THE ACTION
// ============================================================================
//
// This function is connected to the button in index.html.
//
// It displays the action object on the page.
//
// ============================================================================

function testAction() {
  // Find the output <div> in index.html
  const output = document.getElementById("action-output");

  // Convert the action object into readable JSON
  const formattedAction = JSON.stringify(action, null, 2);

  // Display the action
  output.textContent = `Redux Action:\n\n${formattedAction}`;
}
