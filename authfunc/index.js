const auth0 = require('azure-functions-auth0')({  
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN
});
  
module.exports = auth0(function(context, req) {  
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

    if (req.user) {
        context.res = {
            body: req.user
        };
    }
    else {
        context.res = {
            status: 400,
            body: "The user seems to be missing"
        };
    }
    context.done();
});