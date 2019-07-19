import React from "react";
import { Form, Button } from "semantic-ui-react";


class LoginForm extends React.component {

    state = {
        data: {},
        loading: false,
        errors: {}
    };
    render() {
        return (
            <Form>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;