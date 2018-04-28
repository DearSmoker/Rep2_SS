const respRoutes = require('./resp_routes');

module.exports = function(app, db) {
	respRoutes(app,db);

}
