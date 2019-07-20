import React from "react";
import PropTypes from "prop-types"; // PropTypes exports a range of validators that can be used to make sure the data you receive is valid
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth"; 

class LoginPage extends React.Component {
    /* Now we have Redux so we can do Actions and Dispatch */
    submit = data => this.props.login(data).then(()=> this.props.history.push("/") ); // dispatch thunk action with this data,
                                                                                      // login thunk action and pass data, it 
                                                                                      //will return promise and if everythin ok
                                                                                      // then we will redirect to home page 
                                                                                      // To direct we use history, history is 
                                                                                      //pass into this component by react-router
    render() {
        return (
            <div>
              <h1>LoginPage</h1>
              <LoginForm submit={this.submit} />
          </div>

        );

      }                                                                                
       
    }


LoginPage.propTypes = {
    history: PropTypes.shape({
    push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);