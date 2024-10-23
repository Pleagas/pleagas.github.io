function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const gmail = document.getElementById("gmail").value;
    const comment = document.getElementById("comment").value;
  
    // Validar que todos los campos estén llenos
    if (!name || !phone || !gmail || !comment) {
      alert("Todos los campos son obligatorios.");
      return false;
    }
  
    // Validar que el teléfono sea solo números
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("El teléfono debe contener solo números.");
      return false;
    }
  
    // Validar que el correo sea de Gmail
    if (!gmail.includes("@gmail.com")) {
      alert("El correo debe ser una dirección de Gmail válida.");
      return false;
    }
  
    window.location.href = "gracias.html" 
  return false; // Evitar el envío por defecto del formulario
  }