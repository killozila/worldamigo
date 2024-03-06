document.addEventListener('DOMContentLoaded', function () {
    // ... (seu código existente)

    // Configurar o autocompletar para o campo de endereço
    var enderecoCompletoInput = document.getElementById('enderecoCompleto');
    var autocomplete = new google.maps.places.Autocomplete(enderecoCompletoInput);

    // Adicionar um listener para capturar o evento de seleção do local
    autocomplete.addListener('place_changed', function () {
       var place = autocomplete.getPlace();

       // Aqui, você pode acessar os detalhes do local selecionado, se necessário
       console.log(place);
    });
 });