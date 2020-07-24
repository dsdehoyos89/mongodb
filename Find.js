// Insert data
db.test.insert(
{
  "key":"value",
  "key1":"value1" 
}
);

db.test.insert(
{
    "FirstName":"vijay",
    "LastName":"reddy",
    "age": 10,
    "luckyNumbers": [1,2,3,4,5],
    "address": [
    {
        "Street":"asdjf",
        "City": "dallas",
        "State":"tx",
        "Country":"USA",
        "Type":"Work"
    },
    {
        "Street":"asdf",
        "City": "Bangalore",
        "State":"KA",
        "Country":"India",
        "Type":"Home"
    }
    ],
    "isAlive":true,
    "hobies":[]   
}
);

db.test.find();







