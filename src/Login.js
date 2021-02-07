import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    const style = { margin: 15 };
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar tittle="Login" />
            <TextField
              hintText="Enter your UserName"
              floatingLabelText="userName"
              style={style}
              //onChange = {(event,newValue)=>this.setState({username:newValue})}
            />
            <br />
            <TextField
              type="password"
              hintText="enter your PassWord"
              floatingLabelText="passWord"
              style={style}
              //onChange = {(event,newValue)=>this.setState({password:newValue})}
            />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              //onClick = {(event)=>this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
