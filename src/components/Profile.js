import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component
{
    constructor() 
    {
        super();
        this.state = {
            developers: []
        }
    }

    componentDidMount()
    {
        //Voeg Bearer token in de header voor API toegang
        const ACCESS_TOKEN = localStorage.getItem('access_token');
        const HEADERS = {'Authorization': 'Bearer ' + ACCESS_TOKEN}

        fetch('https://security-hm-yh.herokuapp.com/api/developers', {headers: HEADERS})
        .then(res => res.json())
        .then(developers => this.setState({developers}))
    }

    render()
    {
        return (
            <header className='Main'>
                <img src={this.props.logo} className='logo' alt='Logo' />
                <h1>Developers</h1>

                <ul>
                    {this.state.developers.map(dev =>
                        <li key={dev.id}>{dev.firstName} {dev.lastName}</li>
                    )}
                </ul>
                
                <iframe sandbox='allow-same-origin allow-scripts allow-popups allow-forms' title='Twitter' src='https://platform.twitter.com/widgets/tweet_button.html' scrolling='no'></iframe>

                <Link to='/'>
                <button type='button' onClick={this.props.auth.logout}>Uitloggen</button>
                </Link>
            </header>
        );
    }
}

export default Profile;