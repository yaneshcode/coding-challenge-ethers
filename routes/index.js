var express = require('express');
var router = express.Router();
var ethers = require('ethers');

const provider = new ethers.getDefaultProvider('kovan');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET request that Takes a number and returns the BN representation
router.get('/bn/:number', (request, response) => {
  let number = request.params.number;
  let bn = ethers.utils.bigNumberify(number);
  response.send("String: " + bn.toString() + "\nHex: " + bn.toHexString());
});

// Get nonce of an address
router.post('/getNonce', (request, response) => {
  let address = request.body.address;
  provider.getTransactionCount(address).then((transactionCount) => {
    console.log("Total Transactions Ever Sent: " + transactionCount);
    response.send("Total Transactions Ever Sent: " + transactionCount);
  });
});

module.exports = router;
