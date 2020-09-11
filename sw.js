self.addEventListener('push', (e) => {
    //self.registration.sendNotification('Hello World', {});
    var content = e.data.text();
    var options = {
        body:'Notification generated from a push !',
        icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: 2,
            url: content//URL added new
        },
        actions: [
            {action: 'explore', title: 'Open Website', icon:''},
            {action: 'close', title: 'close', icon:'images/xmark.png'}
        ]
    };
    e.waitUntil(self.registration.showNotification(content,options));
})

self.addEventListener('notificationclick', function(event) {

        switch(event.action){
            case 'explore':
                clients.openWindow('https://www.instagram.com'); //opens webpage Note: Prompt user to refresh their page/or prompt resubsciption. Allows changes to show
                break;

            default:
                clients.openWindow(event.notification.data.url);
            /*case 'check':
                clients.openWindow("https://www.youtube.com");
                break;*/
        }
    }
    , false);