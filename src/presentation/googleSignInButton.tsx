import * as React from 'react';
import * as classNames from 'classnames';

import './googleSignInButton.css';

interface GoogleSignInButtonProps {
    onClick: () => void;
    disabled?: boolean;
}

export default class GoogleSignInButton extends React.Component<GoogleSignInButtonProps> {

    render() {
        return (
            <div
                className={classNames('googleSignInButton', {disabled: this.props.disabled})}
                onClick={this.props.onClick}
                title={this.props.disabled ? 'Waiting for Google API to initialise...' : 'Sign in with Google'}
            />
        );
    }

}