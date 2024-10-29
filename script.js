document.getElementById('send').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const gallery = document.getElementById('gallery').files;

    if (!phone || !message) {
        alert('Silakan masukkan nomor telepon dan pesan!');
        return;
    }

    // Kirim pesan ke Telegram
    const botToken = '8163161222:AAEvcL4ec1JGhU_Xo7dz2NauYq6DU-z6vN0'; // Ganti dengan token bot Telegram Anda
    const chatId = '7070826282'; // Ganti dengan chat ID Telegram Anda
    const text = `Nomor: ${phone}\nPesan: ${message}`;

    // Mengirim teks ke Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Pesan berhasil dikirim!');
            } else {
                alert('Gagal mengirim pesan: ' + data.description);
            }
        })
        .catch(error => {
            alert('Terjadi kesalahan saat mengirim pesan: ' + error);
        });

    // Mengirim foto ke Telegram
    for (let i = 0; i < gallery.length; i++) {
        const file = gallery[i];
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('photo', file);

        fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Foto berhasil dikirim!');
            } else {
                alert('Gagal mengirim foto: ' + data.description);
            }
        })
        .catch(error => {
            alert('Terjadi kesalahan saat mengirim foto: ' + error);
        });
    }
});
