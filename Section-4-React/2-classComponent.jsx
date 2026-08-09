


class MyClassComponent extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
  <div>
  <h1>Hello React!</h1>
  <p>Sent from Class component</p>
   <hr />
   </div>
)

    }
}


ReactDOM.render(<MyClassComponent />, document.getElementById('HelloClassComponent'));