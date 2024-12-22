const { Firestore } = require("@google-cloud/firestore");

// Fungsi untuk mendapatkan data riwayat prediksi
async function getHistories() {
  const db = new Firestore({
    databaseId: 'predictions',
    projectId: 'submissionmlgc-galangbuana',
    databaseId: 'predictions', 
    keyFilename: "./submissionmlgc-galangbuana-c3f00ad8f79f.json",
  });

  const predictCollection = db.collection("predictions");
  const histories = [];

  try {
    const snapshot = await predictCollection.get();
    snapshot.forEach((doc) => {
      histories.push(doc.data());
    });
    return histories;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    throw error;
  }
}

module.exports = getHistories;
