var express = require('express');
var router = express.Router();
var ethers = require('ethers');

// const provider = new ethers.getDefaultProvider('kovan');
//
// //console.log(provider);
// const acc = new ethers.Wallet(PRIVATE_KEY, provider);
// //console.log(acc);
//
// const amount = ethers.utils.bigNumberify('1');
// const gasPrice = ethers.utils.bigNumberify('2000000000');
// const gasLimit = ethers.utils.bigNumberify('210000');
// const to = acc.address;
//
// const transaction = async () => {
//   const nonce = await acc.getTransactionCount('pending');
//
//   console.log(nonce);
//
//   const tx = {
//     to,
//     nonce,
//     gasPrice,
//     gasLimit
//   }
//
//   console.log (tx);
//   const raw = await acc.sign(tx);
//   console.log(raw);
// }

//transaction();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bn/:number', (request, response) => {
  let number = request.params.number;
  console.log(number);
  let bn = ethers.utils.bigNumberify(number);
  console.log(bn);
  response.send("String: " + bn.toString() + "\nHex: " + bn.toHexString());
});


router.post('/getNonce', (request, response) => {
  let address = request.body.address;
  console.log(address);
  response.send(address);
});

module.exports = router;
