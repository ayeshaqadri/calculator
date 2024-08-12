function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('datetime').textContent = `${date} ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();




