/* global use, db */
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.anime.insertOne(
  { 'anime': 'Naruto', 'rating': 9.0, 'votes': 10000 }
);

// Insert hypothetical popularity data for some anime into the 'anime' collection.
db.anime.insertMany([
  { 'anime': 'Naruto', 'rating': 9.0, 'votes': 10000 },
  { 'anime': 'One Piece', 'rating': 9.5, 'votes': 15000 },
  { 'anime': 'Dragon Ball Z', 'rating': 8.5, 'votes': 8000 },
  { 'anime': 'Attack on Titan', 'rating': 9.2, 'votes': 12000 },
  { 'anime': 'Death Note', 'rating': 9.3, 'votes': 11000 },
  { 'anime': 'My Hero Academia', 'rating': 9.1, 'votes': 13000 },
  { 'anime': 'Fullmetal Alchemist: Brotherhood', 'rating': 9.7, 'votes': 18000 }
]);

// Specify the title of the anime you want to find.
const animeTitle = 'Naruto';

// Use findOne to find the anime by its title.
const anime = db.anime.findOne({ 'anime': animeTitle });

// Check if the anime exists.
if (anime) {
    // Print the details of the anime.
    printjson(anime);
} else {
    print(`Anime with title "${animeTitle}" not found.`);
}

const allAnime = db.anime.find();

// Iterate over the cursor to access each document.
allAnime.forEach(anime => {
    printjson(anime);
});

// Define the filter to identify the documents you want to update.
const filter = { 'rating': { $lt: 9.0 } };

// Define the update operation to apply to the matching documents.
// For example, let's increase the rating of all anime with a rating less than 9.0 by 0.5.
const update = {
  $inc: { 'rating': 0.5 }
};

// Use updateMany to apply the update operation to all documents that match the filter.
const result = db.anime.updateMany(filter, update);

// Check if the update was successful.
if (result.modifiedCount > 0) {
  print(`Successfully updated the ratings of ${result.modifiedCount} anime.`);
} else {
  print(`No document matched the filter criteria.`);
}


// Define an empty filter to match all documents in the collection.
const filter = {};

// Use deleteMany to remove all documents from the collection.
const result = db.anime.deleteMany(filter);

// Check if the deletion was successful.
if (result.deletedCount > 0) {
  print(`Successfully deleted ${result.deletedCount} documents from the 'anime' collection.`);
} else {
  print(`No documents matched the filter criteria.`);
}
