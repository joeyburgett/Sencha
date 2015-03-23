// controllers/homeController.js
(function (homeController) {
    
    var data = require('../data');

    function actionResponse(error, records, response){
        if (error) {
            response.status(404).send({success: false, msg: error});
        } else {
            response.set('Content-Type', 'application/json');
            response.status(200).send({success: true, data: records});
        }
    }

    homeController.init = function (app) {

        // GET
        app.get("/api", function (request, response) {
            data.getCompanies(function(error, records){
                actionResponse(error, records, response);
            });
        });

        // GET:id
        app.get('/api/:id', function (request, response) {
            var id = request.params.id;
            data.getCompany(id, function(error, records) {
                actionResponse(error, records, response);
            });
        });

        // PUT:id {body}
        app.put('/api/:id', function(request, response) {
            var body = request.body;
            var id = request.params.id;
            data.createCompany(body, function (error, records) {
                actionResponse(error, records, response);
            });
        });

        // POST {body}
        app.post('/api', function (request, response) {
            var body = request.body;
            data.createCompany(body, function (error, records) {
                actionResponse(error, records, response);
            });
        });

        // DELETE:id
        app.delete('/api/:id', function (request, response) {
            var id = request.params.id;
            data.deleteCompany(id, function (error, success) {
                actionResponse(error, [], response);
            });
        });

    };

})(module.exports);