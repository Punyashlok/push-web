var push = require('web-push');

//let vapidKeys = push.generateVapidKeys(); Once generated store the results in a variable as done below.

let vapidKeys = { publicKey: 'BKB4N-zY4mSuEscN1GQ62dpLZ4gndWGX9OSrsdx413Wk7vcHmH5wCTT6k9yHxzylpnMEHRb0gOYHEFv1xKoQ-ZM',
                  privateKey: 'RmlSql9Elxf3DOg3eCiJ3ZPCLpM2Ti4qyfFPaQvJoEk' }

push.setVapidDetails('mailto:punyashlok.com@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

//Pull out from db of stored/registered people who want to receive notifications. Its the result of pushManager.subscribe in index.html


async function subscribe (){
            let sw = await navigator.serviceWorker.ready;
            let pushmsg = await sw.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:'BKB4N-zY4mSuEscN1GQ62dpLZ4gndWGX9OSrsdx413Wk7vcHmH5wCTT6k9yHxzylpnMEHRb0gOYHEFv1xKoQ-ZM'
            });
            console.log(JSON.stringify(pushmsg));
            console.log(pushmsg.endpoint);
            console.log(pushmsg.options);
          }

let sub1 = {"endpoint":"https://fcm.googleapis.com/fcm/send/d54A-Qnn7SE:APA91bEB00lpRL5QnRJ7bITeSWmdf3NxsiMS5bf4Xd2UCdNN8Lx-Jb2wakRb1oV80aLYBsgsttrX4u7ehBFRAYg0KqsktaQAvMH69nvA938PsQXcijS3NC4sCD6E-2XSXPDQrEOZD08u",
             "expirationTime":null,
             "keys":{"p256dh":"BIBZWrXIcqotT7uaFMfyiW9R1Bf28GLzYKtnD94Ksgq3mV_3GfKLgsIiXUUJXrrGHaJ31CxJNB8xTwFDKoIrbDs","auth":"IEoo8MDeOTkC_dsVmkSuAg"}};

let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/fmZARFRVQrY:APA91bFdxdEieVhlgarwPj_13l5YM91r_ZPw0X2txINObQeIoK2zrclsEknWeXGl5ITe3PQ-0RwGMDl4muwB1PGQbp-bbYms96ezPeCSbf9WH_asLc-vXp6qDDOm7ohClQlkbclOeD4N",
            "expirationTime":null,
            "keys":{"p256dh":"BJEpsF3qk6Rl8XWPu1Os0igNToeL_4oxc_6wf3KNo_nh6JhKvRnAiMhf6NwPvczCbFZ11L3n5Xbi6hFpEZUKjDA","auth":"RQwKkpU6WYtg7GI6CS_PCQ"}};

/*let sub = {
           "endpoint":pushmsg.endpoint,
           "expirationTime":null,

}*/


push.sendNotification(sub1,'Hello World');
push.sendNotification(sub2,'HI');
