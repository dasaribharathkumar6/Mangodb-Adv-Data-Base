//Find&Modify
db.create.Collection('podcasts')
db.podcasts.findAndModify({
  query: {_id: ObjectId("65c2a217dd77e720d30e243f")},
  update: {$inc: {downloads: 1}},
  new: true,
});
/output :null/


//ForFind&Modify
db.podcasts.insertOne({
  title: "The Atlas Podcast",
  platforms: ["Apple Podcasts", "Spotify"],
  downloads: 6012,
});
/*Output:{
  acknowledged: true,
  insertedId: ObjectId('65c53ef4f61bf4a142e88948')
}*/

//findoneUsingCRUD.py
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

    # inserting one account
    doccument_to_find = {
        "_id": ObjectId("65c2caeaae6140696995984e")
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = accounts_collection.insert_one(doccument_to_find)

    pprint.pprint(result)


except Exception as e:
    print(e)
finally:
    client.close()



  //findmanyusingCRUD.py
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

    # inserting one account
    documents_to_find = {"balance": {"$gt": 4700}}

    # Write an expression that selects the documents matching the query constraint in the 'accounts' collection.
    cursor = accounts_collection.find(documents_to_find)

    num_docs = 0
    for document in cursor:
        num_docs += 1
        pprint.pprint(document)
        print()
    print("# of documents found: " + str(num_docs))


except Exception as e:
    print(e)
finally:
    client.close()
