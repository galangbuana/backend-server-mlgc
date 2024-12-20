const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");

// Fungsi untuk melakukan klasifikasi gambar
async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.dataSync();
    const confidenceScore = Math.max(...score) * 100;

    const classes = ["Cancer", "No Cancer"];
    let label, suggestion;

    if (confidenceScore > 50) {
      label = classes[0];
      suggestion = "Segera periksakan ke dokter!";
    } else {
      label = classes[1];
      suggestion = "Tetap jaga kesehatan dan lakukan pemeriksaan rutin.";
    }

    return { label, suggestion };
  } catch (error) {
    throw new InputError("Kesalahan saat melakukan prediksi.");
  }
}

module.exports = predictClassification;
