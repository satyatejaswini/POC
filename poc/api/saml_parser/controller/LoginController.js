const config = require('../config');
const saml2js = require('saml2-js');

class LoginController {

    handle(req, res) {
        var sp = new saml2js.ServiceProvider(config.sp_options);
        var idp = new saml2js.IdentityProvider(config.idp_options);
        sp.create_login_request_url(idp, req.body, (error, login_url) => {
            if (error !== null) {
                return res.send(error.message);
            }
            else {
                res.redirect(login_url);
            }
        });
    }
}

module.exports = LoginController;