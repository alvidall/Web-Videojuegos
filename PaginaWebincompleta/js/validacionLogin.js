$(document).ready(function() {
    $('.boton_ingresar').click(function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        var correo = $('#Correo').val();
        var password = $('#password').val();
        var error = false;

        // Validar el campo de correo
        if (!correo) {
            $('#Correo').addClass('is-invalid');
            $('#correoError').html('El correo es un campo requerido');
            error = true;
        } else {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(correo)) {
                $('#Correo').addClass('is-invalid');
                $('#correoError').html('El formato del correo no es válido');
                error = true;
            } else {
                $('#Correo').removeClass('is-invalid');
                $('#correoError').html('');
            }
        }

        // Validar el campo de contraseña
        if (!password) {
            $('#password').addClass('is-invalid');
            $('#passwordError').html('La contraseña es un campo requerido');
            error = true;
        } else {
            if (password.length < 5 || password.length > 15) {
                $('#password').addClass('is-invalid');
                $('#passwordError').html('La contraseña debe tener entre 5 y 15 caracteres');
                error = true;
            } else {
                $('#password').removeClass('is-invalid');
                $('#passwordError').html('');
            }
        }

        // Si no hay errores, se puede proceder con el envío del formulario
        if (!error) {
            // Aquí puedes manejar el envío del formulario, como una llamada AJAX o redireccionar a otra página
            // Por ejemplo, redireccionar a otra página:
            // window.location.href = 'pagina_de_destino.html';
            alert('Formulario enviado correctamente'); // Mensaje temporal para demostrar el funcionamiento
        }
    });
});
