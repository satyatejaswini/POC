var config = {};

 config.sp_options = {
    entity_id: "https://sp.example.com/metadata.xml",
    private_key: "$$$privateKey$$$",
    certificate: "###Authorised_IDP###",
    assert_endpoint: "https://sp.example.com/assert"
};

config.idp_options = {
    sso_login_url: "https://idp.example.com/login",
    certificates: "###Authorized_SP###"
};


module.exports = config;
