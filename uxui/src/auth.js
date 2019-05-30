const webAuth = new window.auth0.WebAuth({
    domain: 'dev-ny-zme1i.eu.auth0.com',
    clientID: '0EekX1x5URGEwdRbOK0I4RYBXAYUNQtH',
    redirectUri: 'http://localhost:3000/profile'
});

function sendEmail(email) {

    webAuth.passwordlessStart({
        connection: 'email',
        send: 'link',
        email: email
    }, function (err, res) {
        if (err) {
            // Handle error
            console.log(`Auth0 error: ${err}`)
        }
    });
}

export default sendEmail
