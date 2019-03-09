import React, {Component} from 'react';

class Logout extends Component
{
    componentDidMount()
    {
        window.location.pathname = '/';
    }

    render()
    {
        return (
            <header className='Main'>
                <img src={this.props.logo} className='logo' alt='Logo' />
                <h1>Uitloggen..</h1>
            </header>
        );
    }
}

export default Logout;