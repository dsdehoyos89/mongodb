
// Update queries

//db.collection.updateOne(<filter>, <update>, <options>)

//db.collection.updateMany(<filter>, <update>, <options>)

//db.collection.replaceOne(<filter>, <update>, <options>)

db.posts.updateOne(
    {"postId" : 3511}, 
    {$set: { "shared" : false}}
);


db.posts.updateOne(
    {"postId" : 3511}, 
    {$inc: { "comments" : 1}}
);
    
db.posts.updateOne(
    {"postId" : 3511}, 
    {$unset: { shared: 1}}
);
