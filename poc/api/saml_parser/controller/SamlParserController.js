
class SamlParserController {

constructor() {

}

    handle (req, res) {
        var requestBody = req.body;
        var samlResponse = requestBody['samlp:response'];
        console.log("Issuer",samlResponse['saml:issuer']);
        var employeeDetails = samlResponse['saml:assertion'][0]['saml:attributestatement'];
        var final_response = {
            client_id : employeeDetails[0]['saml_clientid:attribute'][0]['saml:attributevalue'][0]['$']['client_Id'],
            token : employeeDetails[0]['saml_token:attribute'][0]['saml:attributevalue'][0]['$']['token']
        };
        return res.send(final_response);
    }
}

module.exports = SamlParserController;
