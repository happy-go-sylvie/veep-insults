const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const serviceAccount = require("./permissions.json");
require('dotenv').config();

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL
});

const app = express();
app.use(cors({ origin: true }));

const database = firebase.firestore();

function get_all(collection) {
	app.get('/api/' + collection, async (req, res) => {
		try {
			const collectionRef = database.collection(collection);
			const snapshot = await collectionRef.get();
			let data = [];
			snapshot.forEach(documentRef => {
				let documentData = documentRef.data();
				documentData.id = documentRef.id;
				data.push(documentData);
			});
			return res.status(200).send(data);
		} catch (error) {
			console.log(error);
			return res.status(500).send(error);
		}
	});
}

function get_one(collection) {
	app.get('/api/' + collection + '/:document_id', async (req, res) => {
		try {
			const documentRef = database.collection(collection).doc(req.params.document_id);
			let snapshot = await documentRef.get();
			let data = snapshot.data();
			return res.status(200).send(data);
		} catch (error) {
			console.log(error);
			return res.status(500).send(error);
		}
	});
}

get_all('characters');
get_all('insults');
get_one('characters');
get_one('insults');

exports.app = functions.https.onRequest(app);
