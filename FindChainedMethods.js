
// sorting limit skip

db.posts.find({});

db.posts.find({}).limit(1);

db.posts.find({}).skip(1).limit(1);

db.posts.find({}).skip(2).limit(1);

// 1 







