
const Wiring = require('../wiring');

const getRouter = () => {
    const router = require('express').Router();
    const wiring = new Wiring();

    router.post('/oneLogin', (req, res) => {
        const samlController = wiring.SamlController();
        return samlController.handle(req, res);
});

    router.post('/identity',(req,res)=>{
        const identityController  = wiring.IdentityController();
    return identityController.handle(req, res);
});


//Using saml2js parser with serviceProvider and Identity Provider

    router.post("/login",(req,res)=>{
        const loginController = wiring.LoginController();
        return loginController.handle(req,res);
    });

    router.post("/assert", (req, res)=> {
        const parserController  = wiring.ParserController();
        return parserController.handle(req, res);
    });



    return router;
};

module.exports = getRouter;