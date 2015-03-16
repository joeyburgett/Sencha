// controllers/homeController.js
(function (homeController) {
    
    var data = require('../data');

    homeController.init = function (app) {
        
        app.get("/api", function (request, response) {
            data.getCompanies(function(error, records) {
                if (error) {
                    response.status(404).send(error);
                } else {
                    response.set('Content-Type', 'application/json');
                    response.status(200).send({ data: records });
                }
            });
        });

        app.get('/api/:id', function (request, response) {
            var id = request.params.id;
            data.getCompany(id, function(error, record) {
                if (error) {
                    response.status(404).send(error);
                } else {
                    response.set('Content-Type', 'application/json');
                    response.status(200).send(record);
                }
            });
        });

        app.put('/api/:id', function(request, response) {
            var body = request.body;
            var id = request.params.id;
            data.createCompany(body, function (error, record) {
                if (error) {
                    response.status(404).send({ success: false, message: error });
                } else {
                    response.set('Content-Type', 'application/json');
                    response.status(200).send({ success: true, data: record });
                }
            });
        });

        app.post('/api', function (request, response) {
            var body = request.body;

            data.createCompany(body, function (error, record) {
                if (error) {
                    response.status(404).send({ success: false, message: error });
                } else {
                    response.set('Content-Type', 'application/json');
                    response.status(200).send({ success: true, data: record });
                }
            });
        });

        app.delete('/api/:id', function (request, response) {
            var id = request.params.id;
            data.deleteCompany(id, function (error, success) {
                if (error) {
                    response.status(404).send(error);
                } else {
                    response.set('Content-Type', 'application/json');
                    response.status(200).send({ success: success });
                }
            });
        });
    };

})(module.exports);