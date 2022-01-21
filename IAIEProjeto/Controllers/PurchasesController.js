var access_token = "9d9432a78d3f94fd521aa5bb594398965b931aa3";
var link = `https://api.moloni.pt/v1/purchaseOrder/getAll/?access_token=${access_token}`;
const request = require('request');

/*function login(callback) {
    let options = {
        url: `https://api.moloni.pt/v1/grant/?grant_type=password&client_id=trabalhoisi&client_secret=d96702e79bdae466f779aadc227e9e18587d7a2d&username=nunoabreufernandes.21@gmail.com&password=EasyFestival123`
    }
    req.get(options, (err, res) => {
        if (!err && res.statusCode == 200) {
          //console.log(res.statusCode);
            callback({
                'access_token': JSON.parse(res.body).access_token
            });
            //console.log("Token:" +  JSON.parse(res.body).access_token);
        } else {
          //console.log(res.statusCode);
            callback({
                'statusCode': res.statusCode,
                'body': JSON.parse(res.body)
            });
        }
    })
  }*/

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

module.exports = {
    listPurchases: getAll
};