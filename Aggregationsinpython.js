//$match
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
        "$group": {
            "_id": "$city",
            "total_pop":{"$sum":"$pop"}
        }
    }
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://putireddylatha96:Plr2096@cluster0.eehlqkd.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
        "$group": {
            "_id": "$state",
            "total_pop":{"$sum":"$pop"}
        }
    }
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()
/*output : [{'_id': 'LA', 'total_pop': 4219973}, {'_id': 'FL', 'total_pop': 12937926}, {'_id': 'MS', 'total_pop': 2573216}, {'_id': 'KS', 'total_pop': 2477574}, {'_id': 'HI', 'total_pop': 1108229}, {'_id': 'IN', 'total_pop': 5544159}, {'_id': 'SD', 'total_pop': 696004}, {'_id': 'IL', 'total_pop': 11430602}, {'_id': 'WA', 'total_pop': 4866692}, {'_id': 'MO', 'total_pop': 5117073}, {'_id': 'CO', 'total_pop': 3294394}, {'_id': 'NV', 'total_pop': 1201833}, {'_id': 'ND', 'total_pop': 638800}, {'_id': 'MA', 'total_pop': 6016425}, {'_id': 'VT', 'total_pop': 562758}, {'_id': 'ME', 'total_pop': 1227928}, {'_id': 'NC', 'total_pop': 6628637}, {'_id': 'WY', 'total_pop': 453588}, {'_id': 'NH', 'total_pop': 1109252}, {'_id': 'AL', 'total_pop': 4040587}, {'_id': 'KY', 'total_pop': 3685296}, {'_id': 'TX', 'total_pop': 16986510}, {'_id': 'CA', 'total_pop': 29760021}, {'_id': 'MN', 'total_pop': 4375099}, {'_id': 'NY', 'total_pop': 17990455}, {'_id': 'PA', 'total_pop': 11881643}, {'_id': 'MD', 'total_pop': 4781468}, {'_id': 'IA', 'total_pop': 2776755}, {'_id': 'GA', 'total_pop': 6478216}, {'_id': 'AR', 'total_pop': 2350725}, {'_id': 'AZ', 'total_pop': 3665228}, {'_id': 'DC', 'total_pop': 606900}, {'_id': 'NJ', 'total_pop': 7730188}, {'_id': 'OK', 'total_pop': 3145585}, {'_id': 'RI', 'total_pop': 1003464}, {'_id': 'UT', 'total_pop': 1722850}, {'_id': 'SC', 'total_pop': 3486703}, {'_id': 'VA', 'total_pop': 6187358}, {'_id': 'WV', 'total_pop': 1793477}, {'_id': 'MI', 'total_pop': 9295297}, {'_id': 'MT', 'total_pop': 799065}, {'_id': 'CT', 'total_pop': 3287116}, {'_id': 'OH', 'total_pop': 10847115}, {'_id': 'AK', 'total_pop': 550043}, {'_id': 'WI', 'total_pop': 4891769}, {'_id': 'NE', 'total_pop': 1578385}, {'_id': 'OR', 'total_pop': 2842321}, {'_id': 'DE', 'total_pop': 666168}, {'_id': 'NM', 'total_pop': 1515069}, {'_id': 'ID', 'total_pop': 1006749}, {'_id': 'TN', 'total_pop': 4877185}]*/


//sort.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import poplib
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
        "$sort": {
            "pop": -1
        }
    }
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()


//limit.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
        "$sort": {
            "pop": -1,
        }
    },
    {"$limit": 3}
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()

//Count.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import poplib
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    { "$count": "total_zips" }
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()


/sset.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
        "$sort": {
            "pop": -1,
        }
    },
    {"$limit": 3}
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()

//project.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import poplib
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
	"$project": {
	"state":1,
	"zip":1,
	"population":"$pop",
	"_id":0
  }
}
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()

/out.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://dasaribharathkumar6:Bharath123@cluster0.bfx7sqv.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # Define the aggregation pipeline
    pipeline = [
        {
            "$group": {
                "_id": "$state",
                "total_pop": {"$sum": "$pop"}
            }
        },
        {
            "$match": {
                "total_pop": {"$lt": 1000000}  # Corrected typo in "$lt"
            }
        },
        {
            "$out": "small_states"
        }
    ]

    # Execute the aggregation pipeline
    result = list(accounts_collection.aggregate(pipeline))

    # Print the result of the aggregation pipeline or a message if no documents match the criteria
    if result:
        pprint(result)
    else:
        print("No documents in the collection")

    # Retrieve the list of collections after the aggregation pipeline has executed
    collection_names = db.list_collection_names()

    # Print the list of collections
    print("Collections:")
    for collection_name in collection_names:
        print(collection_name)

except Exception as e:
    print(e)

finally:
    # Close the MongoDB client connection
    client.close()
