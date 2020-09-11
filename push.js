var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys(); //Once generated store the results in a variable as done below.
//console.log(vapidKeys1);

let vapidKeys = { publicKey: 'BKB4N-zY4mSuEscN1GQ62dpLZ4gndWGX9OSrsdx413Wk7vcHmH5wCTT6k9yHxzylpnMEHRb0gOYHEFv1xKoQ-ZM',
                  privateKey: 'RmlSql9Elxf3DOg3eCiJ3ZPCLpM2Ti4qyfFPaQvJoEk' }

push.setVapidDetails('mailto:punyashlok.com@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

//Pull out from db of stored/registered people who want to receive notifications. Its the result of pushManager.subscribe in index.html

var payload = 'https://www.famlinet.com';

let sub1 = {"endpoint":"https://fcm.googleapis.com/fcm/send/f3UrJbw7Z_k:APA91bH_fElCABIgjK_NNy4yCbHv47wkJHa2fjp6ljB9aMVmUWSBUYOAjgcb3u71rDbKl7QjKlYKECmW9sVSvkEZSQpDhUDW53U0HS9L695L198YEwjIA--Tm2bINIOyGCPYRoldahba",
            "expirationTime":null,
            "keys":{"p256dh":"BJyD9Z9_CYUXinmqXrBFEuWQaFpXOAfkhg46gTQ2KN9VOPXcYRCP04liwKXkTNeNQP-BwzsVHgZn4mxu2Xt2odU","auth":"OcidYd1WFYv0IkJNZZrHTg"}}

let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/d4hOSNFFaQk:APA91bFEHs-GRCpNMtL9_l17DWytmF6BqYB72tudt3YG3cM7gfI1RR6Z7Ic0vw-V2gV5aPShmNw1Ex7dCAFlFsc0Ps4bIwcyRO2i55oINGtr3dJgFSxMlWrJJRPYw-UH5I9T0faz3g7p",
            "expirationTime":null,
            "keys":{"p256dh":"BNdI3xVa6chZUhwJ724Z_6jiyxGfqUKHsY0QyPzwd0MoRrk54easFnnOzWT5t5YQBPJYhjrEMHGQ4_OV-NXeceU","auth":"ZeeojmoOk2SVM3x50KKtxw"}}


let sub3 = {"endpoint":"https://fcm.googleapis.com/fcm/send/c3cfPu213iI:APA91bHr8f-vhq9E8GgdgiH8hdZPaChkOv-Wocxf9yVIgOWd1MmZ2K9wosUJ99mt4EZfHiiRJ-jZmHRUngSIKhfGDYrGz3zvIGc6N4fyBn12J8OIBlNoRC9PkefP_DJDFuDYqAEjoUZS",
            "expirationTime":null,
            "keys":{"p256dh":"BNNdbi2HpIKGPQpH3X0FZc-UKtbfy08HFEFzMjQOVcAs13fbEvqfZQ3zU2a2dOQ7J3Vva5awIDnQX-AM1nVn5Js","auth":"rAZh1yP3lW6VPoLMPEeIIg"}} // Nafiz linux - chorimium

let sub4 = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABfSVXnawoIpgsdME6OgpdZNSm3tYJf6vslBDnwy58joBiZqXMHP_fRTju_WL9HEnIZ2RQR-5QKpCgOlc1TZSLvaWrPIsawPgmheA7Wx3P4QVEj5oTzbuKSUXGBsfz4oEYj2bsgQgLDXDZ9DNMoaU3Xt-FzSIFuq8nrBZbCAxbreJFkddo",
           "keys":{"auth":"APgafQYSuCmEn60QcZv8EA","p256dh":"BJvK_5fAwB0clZgL3EmqHgbVN69OuyNOq9XdOEYegoi-UXVf_jUKaiT91RX8O29sunJ6W0lw7bO1XqLpi7h6_oU"}} //Nafiz firefox - windows

let sub5 = {"endpoint":"https://fcm.googleapis.com/fcm/send/dwiGKN2ps-Y:APA91bEEyXXaA-oltHc9jXfTLsyGueF1LVZ04q2BdSWSyGBsoiBOeyuUFWZHBFFHrAIOl9oKuQMLA0icaZxwoBMCPpHASz4yLJbhr9pCvg-KIOQZ_IFk142EQQ_KPj6zpEKvLC1sdcw7",
            "expirationTime":null,
            "keys":{"p256dh":"BIhjo2Bvv9lWpDndeNPr4ZpclJkge9keHM3RHLgQW07KeKt5c7q3yB8CGMNPI_UqWIV4KHfkJu19O9gEiifJw9s","auth":"gcfPuPmeEWBWneZsK7_URA"}} //Nafiz chrome - windows

/*let sub = {
           "endpoint":pushmsg.endpoint,
           "expirationTime":null,

}*/

push.sendNotification(sub1,payload);
push.sendNotification(sub2,payload);

/*push.sendNotification(sub4,payload);
push.sendNotification(sub3,payload);
push.sendNotification(sub5,payload);*/

