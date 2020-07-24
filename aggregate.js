// aggregate methods
db.posts.count({shared: true});

db.posts.find({shared: false});


db.posts.find();

db.posts.aggregate([
    {$group: {_id: "$shared", count: {$sum: 1},  totalComments: {$sum: '$comments'} }}
]);

db.posts.updateOne({"postId" : 2618},{$set: {"comments":5}});
