//Update
db.createCollection('podcasts')
db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}}
);
/*output:{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/
//confirm
db.podcasts.findOne({title: "The Developer Hub"});
/output: null/

//updatemany()
db.createCollecton('books')
db.books.updateMany(
  {publishedDate: {$lt: ISODate("2017-04-27T08:00:00.000+00:00")}},
  {$set: {status: "NEW"}}
);
/*output: {
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/

//UpdateoneusingCRUD.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.bank

    # Get reference to 'accounts' collection
    accounts_collection = db.accounts

    # Filter
    document_to_update = {"_id": ObjectId("65c2cb3a004800a420ffc3dd")}

    # Update
    add_to_balance = {"$inc": {"balance": 100}}

    # Print original document
    pprint.pprint(accounts_collection.find_one(document_to_update))

    # Write an expression that adds to the target account balance by the specified amount.
    result = accounts_collection.update_one(document_to_update, add_to_balance)
    print("Documents updated: " + str(result.modified_count))

    # Print updated document
    pprint.pprint(accounts_collection.find_one(document_to_update))


except Exception as e:
    print(e)
finally:
    client.close()
