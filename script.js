document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari submit biasa

    // Logika untuk validasi login bisa ditambahkan di sini
    // Misalnya memeriksa username dan password

    // Menampilkan pesan selamat datang
    document.getElementById("welcomeMessage").textContent = "Halo Ganteng";
    document.getElementById("welcomeMessage").style.display = "block"; // Menampilkan pesan
  });
