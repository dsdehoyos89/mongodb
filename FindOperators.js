db.posts.find({comments:0});

db.posts.findOne({comments:0});

db.posts.find({ tags:"programming"});

db.posts.find({ "author.name":"Mike Forester"});

// operators

db.posts.find({  
    $and: [
        {comments: {$gt: 0}},
        {comments: {$lt: 10}}
    ]
    });

// find values where share is false or tags is programing
db.posts.find({  
    $or: [
        {shared: {$eq: false}},
        {tags: {$eq: "programming"}}
    ]
    });

// find all elements which are in the given list programming, coding in tags field
    
db.posts.find({
    tags: { $in: [
            "programming",
            "coding"
        ]}
    });
