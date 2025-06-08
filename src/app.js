const { appService, databaseService } = require('./services');

const services = [appService, databaseService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();