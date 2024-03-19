/Text Index/
db.student.createIndex({name: "text", description: "text"},
{
"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexsAfter" : 2,
"ok": 1
})
  then give db.student.getindexes()
/*o/p 
[
  { v: 2, key: { id: 1 }, name: '_id' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' },
  { v: 2, key: { student_id: 777777 }, name: 'student_id_777777' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' },
  {
    v: 2,
    key: { score: '2dsphere' },
    name: 'score_2dsphere',
    '2dsphereIndexVersion': 3
  },
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'name_text_description_text',
    weights: { description: 1, name: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  }
] 
*/
    //HashIndex
db.student.createIndex({_id: "hashed"})
>_id_hashed
db.student.getIndexes()
/*o/p:
[
  { v: 2, key: { id: 1 }, name: '_id' },
  { v: 2, key: { student_id: 223344 }, name: 'student_id_223344' },
  { v: 2, key: { student_id: 777777 }, name: 'student_id_777777' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' },
  {
    v: 2,
    key: { score: '2dsphere' },
    name: 'score_2dsphere',
    '2dsphereIndexVersion': 3
  },
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'name_text_description_text',
    weights: { description: 1, name: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  },
  { v: 2, key: { _id: 'hashed' }, name: '_id_hashed' }
]*/
