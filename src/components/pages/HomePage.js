import React from "react";
import { Link } from "react-router-dom"; 
// to make the page logout, in redux state we have user email and token
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions/auth"
import { CommentActions } from "semantic-ui-react";


const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        {isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/Login">Login</Link>}
    </div>
    );

    //Add prop types to home page 
    HomePage.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
            
        }
    

    //defind a function that returns a props that will be available on home page
    
    function mapStateToProps(state) {
        return { 
            isAuthenticated: !!state.user.token

        }
    }

    export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
