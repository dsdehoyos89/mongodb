const docs2 = {
  "key":"value2",
  "key1":"value3" 
};

const docs1 = {
  "key":"value4",
  "key1":"value6" 
};

//db.test.insert(docs);

db.test.insertMany([
docs2,
docs1
]);

db.test.find();
