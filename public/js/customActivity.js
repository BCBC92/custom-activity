// Define un módulo AMD (Asynchronous Module Definition) que será cargado por Journey Builder
define(function () {
  // Mensaje de consola para confirmar que el archivo JS se ha cargado correctamente
  console.log("Custom Activity JS loaded");

  // Espera a que la ventana (modal) esté completamente cargada
  window.onload = function () {
    // Verifica que el objeto 'journey' esté disponible (lo proporciona SFMC)
    if (window.journey) {

      // Se ejecuta cuando la actividad es inicializada en Journey Builder
      window.journey.onInit(function (data) {
        // Muestra en consola los datos con los que se inicializa la actividad
        console.log('Activity initialized with:', data);
      });

      // Se ejecuta cuando el usuario hace clic en "Guardar" en el modal
      window.journey.onSave(function () {
        // Define el payload que será enviado al endpoint /execute cuando el journey se ejecute
        const payload = {
          arguments: {
            execute: {
              // Datos que se enviarán al endpoint cuando el journey se ejecute
              inArguments: [
                {
                  nombre: "{{Contact.Attribute.customActivity.FirstName}}",
                  email: "{{Contact.Attribute.customActivity.EmailAddress}}"
                }
              ],
              // URL del endpoint que recibirá los datos en tiempo de ejecución
              url: "https://custom-activity-ubrc.onrender.com/execute"
            }
          }
        };

        // Dispara el evento 'save' con el payload definido
        // Esto guarda la configuración de la actividad en Journey Builder
        window.journey.trigger('save', payload);
      });
    }
  };
});