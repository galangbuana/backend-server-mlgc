const tf = require("@tensorflow/tfjs-node");

// Fungsi untuk memuat model dari URL
async function loadModel() {
  return tf.loadGraphModel(process.env.MODEL_URL);
}

module.exports = loadModel;
