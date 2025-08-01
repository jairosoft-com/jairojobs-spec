/**
 * The JobsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/JobsService');

const getJobDetails = async (request, response) => {
  await Controller.handleRequest(request, response, service.getJobDetails);
};

const searchAndListJobs = async (request, response) => {
  await Controller.handleRequest(request, response, service.searchAndListJobs);
};

module.exports = {
  getJobDetails,
  searchAndListJobs,
};

// Export for express-openapi-validator operation handlers
module.exports.getJobDetails = getJobDetails;
module.exports.searchAndListJobs = searchAndListJobs;
