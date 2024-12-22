require("dotenv").config();
const Hapi = require("@hapi/hapi");
const routes = require("../server/routes");
const loadModel = require("../services/loadModel");
const InputError = require("../exceptions/InputError");

// Inisialisasi server
(async () => {
  const server = Hapi.server({
<<<<<<< HEAD
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
=======
    port: 3001,
    host: "localhost",
>>>>>>> daac1d8544d0aff2dda7380efdca0689bbe86e83
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // Memuat model dan menyimpannya di server.app
  const model = await loadModel();
  server.app.model = model;

  // Mendaftarkan routes
  server.route(routes);

  // Middleware untuk memanipulasi response sebelum dikirimkan
  server.ext("onPreResponse", function (request, h) {
    const response = request.response;

    if (response instanceof InputError) {
      const newResponse = h.response({
        status: "fail",
        message: "Terjadi kesalahan dalam memproses prediksi.",
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response.isBoom) {
      const newResponse = h.response({
        status: "gagal",
        message: response.message,
      });
      newResponse.code(response.output.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada: ${server.info.uri}`);
})();
