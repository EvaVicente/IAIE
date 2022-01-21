var access_token = "ebad8a2f312836ad8a1b36967385586868894af0";
var link = `https://api.moloni.pt/v1/receipts/getAll/?access_token=${access_token}`;
const request = require('request');

function getAll(req, res) {
    request.post({
        url: link,
        form: {
            company_id: '205205',
        }
    }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        else {
            data = JSON.parse(body);
            return res.json(data);
        }
    });
}

// interface entre view e controller

module.exports = {
    listPurchases: getAll
};