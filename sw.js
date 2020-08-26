self.addEventListener('push', (e) => {
    //self.registration.sendNotification('Hello World', {});

    var options = {
        body:'Notification generated from a push !',
        icon:'images/example.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: 2
        },
        actions: [
            {action: 'explore', title: 'Explore web-push', icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png'},
            {action: 'close', title: 'close', icon:'images/xmark.png'}
        ]
    };
    e.waitUntil(self.registration.showNotification('Hello World',options));
})