const tf = require("@tensorflow/tfjs-node");

// Fungsi untuk memuat model dari URL
async function loadModel() {
  try {
    const model = await tf.loadGraphModel(process.env.MODEL_URL);
    console.log("Model berhasil dimuat."); // Menambahkan log ketika model berhasil dimuat
    return model;
  } catch (error) {
    console.error("Terjadi kesalahan saat memuat model:", error);
    throw error; // Pastikan untuk melempar error jika terjadi masalah
  }
}

module.exports = loadModel;
