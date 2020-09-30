let notification;
self.addEventListener('push', (e) => {
    //self.registration.sendNotification('Hello World', {});
    var content = e.data.text();
    var options = {
        body:'Click on the badge to visit the website !',
        icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: 2,
            url: content, //URL added new
            timestamp: Date.now() + 3000
        },
        actions: [
            {action: 'Google-Meet', title: 'Open Google meet', icon:''},
            {action: 'jitsi', title: 'Open jitsi', icon:''},
            {action: 'close', title: 'close', icon:'images/xmark.png'}
        ]
    };
    //notification = self.registration.showNotification(content,options);

    setTimeout(() => {
       notification = self.registration.showNotification(content, options);
    }, 1000);

    e.waitUntil(notification);

    // setTimeout(notification.close.bind(notification), 1000);

});

self.addEventListener('notificationclick', function(event) {

    switch(event.action){
            case 'Google-Meet':

                clients.openWindow('https://meet.google.com/');//opens webpage Note: Prompt user to refresh their page/or prompt resubsciption. Allows changes to show
                //console.log(Client.visibilityState); //Doesnt work return undefined
                //console.log(clients.visibilityState); //Doesnt work return undefined
                break;

            case 'jitsi':

                clients.openWindow('https://jitsi.org/');

            default:

               // clients.openWindow(event.notification.data.url);


                setTimeout(() => { event.notification.close();}, 2000); // event.notification.close();

        }

        //event.notification.close();

        event.waitUntil(clients.matchAll(
        {
            type: "window"
        }).then(function(clientList)
        {
        for (var i = 0; i < clientList.length; i++)
         {
            var client_tab = clientList[i];

            if (client_tab.url === event.notification.data.url && !client_tab.focused) // client.focused 'focus' in client
            {
                //if(!client_tab.focused)
                    return client_tab.focus();
            }
         }
            if (clients.openWindow) //clients.openWindow
                return clients.openWindow(event.notification.data.url);

        }));

       /* event.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === event.notification.data.url ? (windowClient.focus(), true) : false);
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus) clients.openWindow(event.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null); }))*/


    }, false);


/*setTimeout(function(){
   notification.close();
},1500);*/
