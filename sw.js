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

                clients.openWindow(event.notification.data.url);
        }
        event.notification.close();

         event.waitUntil(clients.matchAll(
             {
              type: "window"
             }).then(function(clientList)
                {
                    for (var i = 0; i < clientList.length; i++)
                    {
                        var client = clientList[i];

                        console.log('client * '+ client);

                        if (client.url == '/' && 'focus' in client)
                            {
                                  if(!client.focused)
                                      return client.focus();
                            }
                    }
                    if (clients.openWindow)
                        return clients.openWindow('/');

                }));

    }, false);


/*setTimeout(function(){
   notification.close();
},1500);*/
