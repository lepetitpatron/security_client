import React, {Component} from 'react';
import Auth from '../Auth';

class CallBack extends Component
{
    componentDidMount()
    {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render()
    {
        return (
            <header className='Main'>
                <img src={this.props.logo} className='logo' alt='Logo' />
                <h1>Laden..</h1>
            </header>
        );
    }
}

export default CallBack;