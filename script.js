const CHANNEL = "kyoukohoshi";

const client = new tmi.Client({
    connection: { reconnect: true },
    channels: [ CHANNEL ]
});

client.connect();

const log = document.getElementById("log");

function addMessage(user, text) {
    const row = document.createElement("div");
    row.className = "message-row";

    const name = document.createElement("span");
    name.className = "username";
    name.textContent = user + ": ";

    const msg = document.createElement("span");
    msg.className = "message";

    msg.textContent = text;

    row.appendChild(name);
    row.appendChild(msg);
    log.appendChild(row);

    log.scrollTop = log.scrollHeight;
}

client.on("message", (channel, tags, message, self) => {
    addMessage(tags["display-name"] || tags.username, message);
});
