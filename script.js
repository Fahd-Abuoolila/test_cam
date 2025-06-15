function startCamera() {
  const video = document.getElementById('video');

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء تشغيل الكاميرا:", error);
        alert("تعذر الوصول إلى الكاميرا.");
      });
  } else {
    alert("المتصفح لا يدعم الوصول إلى الكاميرا.");
  }
}
