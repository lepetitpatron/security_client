import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFound extends Component
{
    render()
    {
        return (
            <header className='Main'>
                <img src={this.props.logo} className='logo' alt='Logo' />
                <h1>Oeps..</h1>

                <Link to='/'>
                <button type='button'>Terugkeren</button>
                </Link>
            </header>
        );
    }
}

export default NotFound;