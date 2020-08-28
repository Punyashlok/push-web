var push = require('web-push');

//let vapidKeys = push.generateVapidKeys(); Once generated store the results in a variable as done below.

let vapidKeys = { publicKey: 'BKB4N-zY4mSuEscN1GQ62dpLZ4gndWGX9OSrsdx413Wk7vcHmH5wCTT6k9yHxzylpnMEHRb0gOYHEFv1xKoQ-ZM',
                  privateKey: 'RmlSql9Elxf3DOg3eCiJ3ZPCLpM2Ti4qyfFPaQvJoEk' }

push.setVapidDetails('mailto:punyashlok.com@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

//Pull out from db of stored/registered people who want to receive notifications. Its the result of pushManager.subscribe in index.html



let sub1 = {"endpoint":"https://fcm.googleapis.com/fcm/send/d54A-Qnn7SE:APA91bEB00lpRL5QnRJ7bITeSWmdf3NxsiMS5bf4Xd2UCdNN8Lx-Jb2wakRb1oV80aLYBsgsttrX4u7ehBFRAYg0KqsktaQAvMH69nvA938PsQXcijS3NC4sCD6E-2XSXPDQrEOZD08u",
             "expirationTime":null,
             "keys":{"p256dh":"BIBZWrXIcqotT7uaFMfyiW9R1Bf28GLzYKtnD94Ksgq3mV_3GfKLgsIiXUUJXrrGHaJ31CxJNB8xTwFDKoIrbDs","auth":"IEoo8MDeOTkC_dsVmkSuAg"}};

let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/eIUkjYdT8xg:APA91bGbNtbwcY962irUSL0yxktjVXtp5UACoqhmZghDIYradynbtjvmflZFki_aKNcSRx4YqwciN6cCL_isNzrxcakh6GA1TYwH0_XhPLrkXious68icxMLu_m0HfPBmtaT5KEGhSzq",
            "expirationTime":null,
            "keys":{"p256dh":"BMbOo4fBaXqBW3pFQnhPiDt0TuhOzzGPkokABvgc6Id05PudYOHtLOfZIetq2sdRi5R7GmRamgIUWcDP-eXOYRM","auth":"_LhrjFnL543sJWCyTXwwtQ"}}


let sub3 = {"endpoint":"https://fcm.googleapis.com/fcm/send/c3cfPu213iI:APA91bHr8f-vhq9E8GgdgiH8hdZPaChkOv-Wocxf9yVIgOWd1MmZ2K9wosUJ99mt4EZfHiiRJ-jZmHRUngSIKhfGDYrGz3zvIGc6N4fyBn12J8OIBlNoRC9PkefP_DJDFuDYqAEjoUZS",
            "expirationTime":null,
            "keys":{"p256dh":"BNNdbi2HpIKGPQpH3X0FZc-UKtbfy08HFEFzMjQOVcAs13fbEvqfZQ3zU2a2dOQ7J3Vva5awIDnQX-AM1nVn5Js","auth":"rAZh1yP3lW6VPoLMPEeIIg"}} // Nafiz linux - chorimium

let sub4 = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABfSVXnawoIpgsdME6OgpdZNSm3tYJf6vslBDnwy58joBiZqXMHP_fRTju_WL9HEnIZ2RQR-5QKpCgOlc1TZSLvaWrPIsawPgmheA7Wx3P4QVEj5oTzbuKSUXGBsfz4oEYj2bsgQgLDXDZ9DNMoaU3Xt-FzSIFuq8nrBZbCAxbreJFkddo",
           "keys":{"auth":"APgafQYSuCmEn60QcZv8EA","p256dh":"BJvK_5fAwB0clZgL3EmqHgbVN69OuyNOq9XdOEYegoi-UXVf_jUKaiT91RX8O29sunJ6W0lw7bO1XqLpi7h6_oU"}} //Nafiz firefox - windows
/*let sub = {
           "endpoint":pushmsg.endpoint,
           "expirationTime":null,

}*/

push.sendNotification(sub1,'Hello World');
push.sendNotification(sub2,'HI');
