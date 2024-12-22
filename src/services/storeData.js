const { Firestore } = require("@google-cloud/firestore");

// Fungsi untuk menyimpan data hasil prediksi
async function storeData(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
