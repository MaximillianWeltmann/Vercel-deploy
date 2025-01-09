(function() {
    // Yönlendirme kontrolü
    if (!localStorage.getItem('redirected')) {
        localStorage.setItem('redirected', 'true'); // İlk yönlendirme yapıldı olarak işaretle
        window.location.href = "loading.html"; // Kullanıcıyı loading.html'e yönlendir
    }

    // Sayfa kapanmadan önce çalışacak kod
    window.addEventListener('beforeunload', function() {
        localStorage.removeItem('redirected'); // "redirected" durumunu sıfırla
    });
})();