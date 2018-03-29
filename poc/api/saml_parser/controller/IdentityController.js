const uuid = require('uuid');

class IdentityController {

    handle (req, res) {
        var response = {
            access_token: uuid.v4(),
            refresh_token: uuid.v1()
        };
        var saml = req.body;
        return this.validateToken(saml.token)
            .then(()=>res.send(response))
            .catch(error=> {
            res.status(400);
        res.send(error);
    });

    }

    validateToken(token) {
        return new Promise((resolve,reject)=>{
            if(token) {
            resolve;
        }
    else {
            reject('No token specified');
        }
    });
    }
}

module.exports = IdentityController;
