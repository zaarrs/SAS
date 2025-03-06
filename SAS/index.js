//! 1.
function nilaiHuruf(nilaiAngka) {
    if (nilaiAngka >= 90 && nilaiAngka <= 100) {
        return "A";
    }
    if (nilaiAngka >= 80 && nilaiAngka < 89) {
        return "B";
    }
    if (nilaiAngka >= 70 && nilaiAngka < 79) {
        return "C";
    }
    if (nilaiAngka >= 60 && nilaiAngka < 69) {
        return "D";
    }
    if (nilaiAngka < 60) {
        return "E";
    }
}

//! 2.

function login() {
    let username = prompt("Masukkan username: ");
}
function login() {
    let password = prompt("Masukkan password: ");
}
function login() {
    if (username === "admin" && password === "12345") {
        return "Login berhasil!";
    }else{
        return "Login gagal!";
    }
}

//! 3.
function login(username, password) {
    if (username === "admin" && password === "12345") {
        return "Login berhasil!";
    }else{
        return "Login gagal!";
    }
}






