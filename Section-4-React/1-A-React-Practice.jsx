const JSX = (
  <div>
    <h1>Hello World FRom JSX variable</h1>
    <p>
      THis is from a basic JSX variable that is just holding some JSX content
      and then gets rendered to the dom
    </p>
    <hr />
  </div>
);

ReactDOM.render(JSX, document.getElementById("hitme"));

// rendering a component see part 7 notes

const MyComponent = function () {
  return (
    <div>
      <h1>Functional Component</h1>
      <p>Hello from Functional Component</p>
      <hr />
    </div>
  );
};

//IMPORTANT: Use ReactDOM.render to render the component to the DOM
//IMPORTANT: Make sure to specify the component with <> </> when rendering
//IMPORTANT: functional ciomponents must be decalred using JSX self closing tag style
ReactDOM.render(
  <MyComponent />,
  document.getElementById("hiFunctionalComponent"),
);
