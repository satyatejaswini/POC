const saml2 = require('saml2-js');
const config = require('../config');

class ParserController {

    handle(req, res) {

        var sp = new saml2.ServiceProvider(config.sp_options);
        var idp = new saml2.IdentityProvider(config.idp_options);

        var options = req.body;
       return sp.post_assert(idp, options, (err, response) => {
           if (err != null) {
               res.send(err.message);
           } else {
               res.send(response);
           }
       });
    }
}
module.exports = ParserController;