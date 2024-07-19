"use client"
import { getMessaging, getToken } from "firebase/messaging";

const NotificationPage = () => {
    const messaging = getMessaging();


    const getFcmAccessToken = async () => {
        const token = await getToken(messaging, { vapidKey: "BEzXsGjt0ycBOPosuploJO08EEVAKiEknbHXyKkHUi724iX8zGB0c9MYJeABa6AyDqCFYRFhnjDoLHfZlDabp-I" });
        console.log("token", token);

    }

    const enableNotification = async () => {
        console.log("Notification.permission", Notification.permission);
        if (!("Notification" in window)) {
            // Check if the browser supports notifications
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            getFcmAccessToken()
            // Check whether notification permissions have already been granted;
            // if so, create a notification
            // …
        } else if (Notification.permission !== "denied") {
            // We need to ask the user for permission
            Notification.requestPermission().then((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    getFcmAccessToken()
                }
            });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them anymore.

    }

    return <div>

        <button onClick={enableNotification}>Enable notification</button>
    </div>
}

export default NotificationPage