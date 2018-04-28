var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
	app.get('/resp/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection('resp').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'error' });
			} else {
				res.send(item);
			}
		});
	});

	app.delete('/resp/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection('resp').remove(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'error' });
			} else {
				res.send('resposable ' + id + ' deleted!');
			}
		});
	});

	app.put('/resp/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		const resp = { text: req.body.body, title: req.body.title };
		db.collection('resp').update(details, resp, (err, item) => {
			if (err) {
				res.send({ 'error': 'error' });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/resp', (req, res) => {
		const resp = { text: req.body.body, title: req.body.title };
		db.collection('resp').insert(resp, (err, result) => {
			if (err) {
				res.send({ 'error': 'error' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};