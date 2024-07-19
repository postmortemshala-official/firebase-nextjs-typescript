importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey: "AIzaSyBNog7YJGO46NYtU7H8BL0maeh99wOUsCA",
    authDomain: "nextjs-test-a5d17.firebaseapp.com",
    projectId: "nextjs-test-a5d17",
    storageBucket: "nextjs-test-a5d17.appspot.com",
    messagingSenderId: "526824253866",
    appId: "1:526824253866:web:5b94215cfeb9f74d91a3d3",
    measurementId: "G-VC1QNY0YT8"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});