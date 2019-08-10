let socket;


window.onload = function() {
    socket = new WebSocket("ws://localhost/bot/raid");
    socket.onmessage = function(args) {
        
        const payload = JSON.parse(args.data);

        ShowToast(payload.succeeded ? ToastType.Success : ToastType.Error, payload.message);
    }
    socket.onerror = function() { ServerUnreachable() };
}

function StartBot(data) {
    console.log(data);

    socket.send(JSON.stringify(data));
}