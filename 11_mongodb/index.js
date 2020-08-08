const mongo = require('mongodb');

const url = 'mongodb://localhost:27017/test';
const client = mongo.MongoClient(url, {useUnifiedTopology: true});

// sample data
const records = [
    {first_name: 'John', last_name: 'Doe', age: 51},
    {first_name: 'Jane', last_name: 'Doe', age: 46},
    {first_name: 'John', last_name: 'Smith', age: 27},
    {first_name: 'Adam', last_name: 'Jones', age: 70},
    {first_name: 'Mary', last_name: 'Doe', age: 61},
    {first_name: 'Alex', last_name: 'Johnson', age: 37},
    {first_name: 'James', last_name: 'Wilson', age: 17},
    {first_name: 'Nancy', last_name: 'Jones', age: 29},
];

const records_2 = [
    {first_name: 'Samuel', last_name: 'Doe', age: 51},
    {first_name: 'Teresa', last_name: 'Foo', age: 46}
];

async function run() {
    try {
        await client.connect();

        const database = client.db();
        const collection = database.collection("names");

        console.log("========== CRUD - create ==========");
        
        let result = await collection.insertMany(records);
        console.log(`inserted ${result.insertedCount}`, result.ops);

        result = await collection.insertMany(records_2);
        console.log(`inserted ${result.insertedCount}`, result.ops);

        console.log("========== CRUD - read ==========");

        result = await collection.find( {first_name: {$ne:""}} );
        await result.forEach(console.log);

        console.log("========== CRUD - update ==========");

        result = await collection.updateOne(
            { first_name: "John", last_name: "Smith" },  // filter
            { $set: {age: 28} }  // update
        );

        console.log(`modified ${result.modifiedCount}`);

        console.log("========== CRUD - delete ==========");
        
        result = await collection.deleteOne({last_name: "Jones"});  // deletes first match
        console.log(`deleted ${result.deletedCount}`);

        result = await collection.deleteMany({last_name: "Doe"});
        console.log(`deleted ${result.deletedCount}`);
        
    }
    catch(e) {
        console.dir(e);
    }
    finally {
        await client.close();
    }
}

run()
