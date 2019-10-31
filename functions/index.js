const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('galletas');

/// Cloud Functions

exports.addToIndex = functions.firestore.document('galletas/{customerId}')

    .onCreate(snapshot => {

        const data = snapshot.data();
        const objectID = snapshot.id;

        return index.addObject({ ...data, objectID });

    });
    exports.updateIndex = functions.firestore.document('galletas/{customerId}')

    .onUpdate((change) => {
        const newData = change.after.data();
        const objectID = change.after.id;
        return index.saveObject({ ...newData, objectID });
    });

    exports.deleteFromIndex = functions.firestore.document('galletas/{customerId}')

    .onDelete(snapshot => 
        index.deleteObject(snapshot.id)
    );