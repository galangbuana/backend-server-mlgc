const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    databaseId: 'predictions',
    projectId: 'submissionmlgc-galangbuana',
    databaseId: 'predictions', 
    keyFilename: "./submissionmlgc-galangbuana-c3f00ad8f79f.json",
  });

  if (!db) {
    console.log("gagal terhubung ke filestore", db);
  } else {
    console.debug("Berhasil terhubung ke Firestore");
  }

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
