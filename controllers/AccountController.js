const ngrok = require('ngrok');
const AUTH_TOKEN = '2gC9bUJHcNZsjDvXWxYhM_WhP17b5Aq3p6WmtLrkYM'


const sync = async function(req, res){
    await ngrok.authtoken(AUTH_TOKEN);
    const url = await ngrok.connect();

    console.log(url);

    return ReS(res, { url });
}

module.exports.sync = sync;