const { Firestore } = require("@google-cloud/firestore");

// Fungsi untuk menyimpan data hasil prediksi
async function storeData(id, data) {
  const db = new Firestore({
    projectId: "submissionmlgc-galangbuana",
    keyFilename: "./submissionmlgc-galangbuana-c3f00ad8f79f.json",
  });

  const predictCollection = db.collection("predictions");

  try {
    await predictCollection.doc(id).set(data);
    console.log(`Data berhasil disimpan dengan ID: ${id}`);
  } catch (error) {
    console.error(`Error menyimpan data: ${error.message}`);
    throw error;
  }
}

module.exports = storeData;
