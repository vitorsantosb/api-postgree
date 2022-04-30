const http = require("http");
const DatabaseService = require("./routes/infra/databaseService.js");
const app = require("./routes/router/postRouter.js");

async function inicialize() {
    await DatabaseService.init();

    const server = http.createServer(app);

    server.listen(process.env.PORT || 5000, () =>
        console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
}

inicialize();