import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component
{
    render()
    {
        return (
            <header className='Main'>
                <img src={this.props.logo} className='logo' alt='Logo' />
                <h1>Welkom!</h1>

                <Link to='/profile'>
                <button type='button' onClick={this.props.auth.login}>Inloggen</button>
                </Link>
            </header>
        );
    }
}

export default LandingPage;