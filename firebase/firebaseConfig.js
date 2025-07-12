const admin = require('firebase-admin');
const serviceAccount = require('"C:\Users\vrajr\Downloads\rewear-b52b4-firebase-adminsdk-fbsvc-cfa97233c1.json"');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rewear-b52b4.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };
