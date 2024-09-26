document.getElementById('cortar_imagem').addEventListener('click', function () {
    const input = document.getElementById('imagem_input');
    const imagemCortadaDiv = document.getElementById('imagem_cortada');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // Aqui vamos cortar a imagem
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const corteLargura = 15000; // Ajuste isso para o tamanho do corte desejado
                const corteAltura = 1500;
                
                canvas.width = corteLargura;
                canvas.height = corteAltura;

                // Desenhar a imagem cortada no canvas (ajuste os valores de corte conforme necessário)
                ctx.drawImage(img, 0, 0, corteLargura, corteAltura, 0, 0, corteLargura, corteAltura);

                // Exibir a imagem cortada
                const cortada = new Image();
                cortada.src = canvas.toDataURL();
                imagemCortadaDiv.innerHTML = ''; // Limpa imagens anteriores
                imagemCortadaDiv.appendChild(cortada);
            };
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        alert("Por favor, selecione uma imagem para cortar.");
    }
});
