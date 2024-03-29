// utils/firebaseAdmin.ts
import * as admin from 'firebase-admin';

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined;

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: firebasePrivateKey,
        }),
    });
}

export const auth = admin.auth();
// export const db = admin.firestore(); // Uncomment if you're using Firestore
