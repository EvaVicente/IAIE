var access_token = "4a86f14e3417a039c74b81cb8517b3c7f7bf5842";
var link = `https://api.moloni.pt/v1/invoices/getAll/?access_token=${access_token}`;

const request = require ('request');
request.post({
    url: link,
    form: {
        company_id: '205205',
    }
}, function (err, httpResponse, body) {
    data = JSON.parse(body);
    console.log(data);
    return data;
})