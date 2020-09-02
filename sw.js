self.addEventListener('push', (e) => {
    //self.registration.sendNotification('Hello World', {});

    var options = {
        body:'Notification generated from a push !',
        icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: 2,

        },
        click_action : "https://www.fb.com",
        actions: [
            {action: 'explore', title: 'Open Website', icon:''},
            {action: 'close', title: 'close', icon:'images/xmark.png'}
        ]
    };
    e.waitUntil(self.registration.showNotification('Hello World',options));
})

self.addEventListener('notificationclick', function(event) {

        switch(event.action){
            case 'explore':
                clients.openWindow(event.notification.data.url); //which we got from above
                break;
            /*case 'check':
                clients.openWindow("https://www.youtube.com");
                break;*/
        }
    }
    , false);