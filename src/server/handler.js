const predictClassification = require("../services/inferenceService");
const crypto = require("crypto");
const storeData = require("../services/storeData");
const getHistories = require("../services/getHistories");

// Fungsi handler untuk melakukan prediksi berdasarkan input gambar
async function postPredictHandler(request, h) {
  const { image } = request.payload; // Mengambil gambar dari payload
  const { model } = request.server.app; // Mengakses model dari server.app

  // Melakukan prediksi dengan fungsi predictClassification
  const { confidenceScore, label, suggestion } = await predictClassification(
    model,
    image
  );

  // Membuat ID dan timestamp untuk data
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  // Data yang akan disimpan
  const data = {
    id,
    result: label,
    suggestion,
    createdAt,
  };

  // Menyimpan data ke database
  await storeData(id, data);

  // Membuat response sukses
  const response = h.response({
    status: "success",
    message: "Prediksi berhasil dilakukan.",
    data,
  });

  response.code(201);
  return response;
}

// Fungsi handler untuk mendapatkan riwayat prediksi
async function getHistoriesHandler() {
  const data = await getHistories();
  return {
    status: "success",
    data,
  };
}

module.exports = { postPredictHandler, getHistoriesHandler };
