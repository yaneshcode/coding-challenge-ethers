# Ethers coding challenge
BigNumber and Nonce. Ethersjs

### Get big number representation

GET http://localhost:3000/bn/:number

### Get nonce of address (Kovan)
POST /nonce application/json payload: { "address": "0x0aF56716A76b160a67EE111FD620325ec5942a79" } 

curl -X POST "http://localhost:3000/nonce" -H "Content-Type: application/json" -d '{ "address": "0x0aF56716A76b160a67EE111FD620325ec5942a79" }'
