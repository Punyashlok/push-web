var push = require('web-push');

//let vapidKeys = push.generateVapidKeys(); Once generated store the results in a variable as done below.

let vapidKeys = { publicKey: 'BKB4N-zY4mSuEscN1GQ62dpLZ4gndWGX9OSrsdx413Wk7vcHmH5wCTT6k9yHxzylpnMEHRb0gOYHEFv1xKoQ-ZM',
                  privateKey: 'RmlSql9Elxf3DOg3eCiJ3ZPCLpM2Ti4qyfFPaQvJoEk' }

push.setVapidDetails('mailto:punyashlok.com@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

//Pull out from db of stored/registered people who want to receive notifications. Its the result of pushManager.subscribe in index.html

let sub = [
            {"endpoint":"https://fcm.googleapis.com/fcm/send/d54A-Qnn7SE:APA91bEB00lpRL5QnRJ7bITeSWmdf3NxsiMS5bf4Xd2UCdNN8Lx-Jb2wakRb1oV80aLYBsgsttrX4u7ehBFRAYg0KqsktaQAvMH69nvA938PsQXcijS3NC4sCD6E-2XSXPDQrEOZD08u",
             "expirationTime":null,
             "keys":{"p256dh":"BIBZWrXIcqotT7uaFMfyiW9R1Bf28GLzYKtnD94Ksgq3mV_3GfKLgsIiXUUJXrrGHaJ31CxJNB8xTwFDKoIrbDs","auth":"IEoo8MDeOTkC_dsVmkSuAg"}}
          ];

 push.sendNotification(sub,'Hello World');
