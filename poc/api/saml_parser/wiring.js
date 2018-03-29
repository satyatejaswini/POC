const SamlParserController = require('./controller/SamlParserController');
const IdentityController = require('./controller/IdentityController');
const ParserController = require('./controller/ParserController');
const LoginController = require('./controller/LoginController');
class Wiring {

constructor() {

}


    SamlController() {
        return new SamlParserController();
    }

    IdentityController() {
        return new IdentityController();
    }

    ParserController() {
    return new ParserController();
    }


    LoginController() {
    return new LoginController();
    }
}

module.exports = Wiring;
