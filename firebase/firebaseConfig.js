const admin = require('firebase-admin');
const serviceAccount = require('"C:\Users\vrajr\Downloads\rewear-b52b4-firebase-adminsdk-fbsvc-3ca05460a7.json"'); // the JSON you downloaded

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});