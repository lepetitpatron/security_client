import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = '/profile';
const LOGIN_FAILURE_PAGE = '/';

{/* Code van de Auth0 documentatie */}
class Auth 
{
    auth0 = new auth0.WebAuth({
        domain: 'menounyhamza.eu.auth0.com',
        clientID: '6AOeyKe6b63aEOResFg4tDbvMrq9Pc2u',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        audience: 'developers',
        scope: 'openid apname.read'
    })

    constructor()
    {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login()
    {
        this.auth0.authorize();
    }

    handleAuthentication()
    {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken)
            {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem('access_token', authResults.accessToken);
                localStorage.setItem('id_token', authResults.idToken);
                localStorage.setItem('expires_at', expiresAt);
                window.location.hash = '';
                window.location.pathname = LOGIN_SUCCESS_PAGE;
            }
            else if (err)
            {
                window.location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    isAuthenticated()
    {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    logout()
    {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        window.location.href = 'https://menounyhamza.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2Flogout&client_id=6AOeyKe6b63aEOResFg4tDbvMrq9Pc2u';
    }
}

export default Auth;