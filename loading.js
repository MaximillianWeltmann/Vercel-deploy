// Animasyon süresi ve dönüş sayısına göre yönlendirme
window.onload = function () {
    const animationDuration = 2000; // 1 tur = 2 saniye
    const totalRotations = 3; // 3 tam tur

    // 3 tam tur tamamlandıktan sonra yönlendirme
    setTimeout(function () {
        window.location.href = "index.html"; // Hedef sayfa
    }, animationDuration * totalRotations);
};
