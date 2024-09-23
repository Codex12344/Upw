const uploadForm = document.getElementById('upload-form');
const codeTextarea = document.getElementById('code');
const uploadStatusDiv = document.getElementById('upload-status');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = codeTextarea.value.trim();
    if (code !== '') {
        // Send the code to the server using AJAX or fetch API
        // For demonstration purposes, we'll just display the code
        uploadStatusDiv.textContent = `أكوادك تم رفعها بنجاح!`;
    } else {
        uploadStatusDiv.textContent = `يرجى إدخال أكوادك`;
    }
});
