            // Adiciona a biblioteca qrcodejs
            (function() {
                var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
                script.onload = function() {
                    // Nada a fazer aqui, só garantir que a lib está carregada
                };
                document.head.appendChild(script);
            })();

    function gerarPix() {
        // Simulação de geração de código PIX
        const pixCode = "00020126580014BR.GOV.BCB.PIX0136+55219999999952040000530398654049.905802BR5925Nome do Recebedor6009Cidade Teste61080540900062070503***6304B14F";
        document.getElementById("pixCode").innerHTML = `
            <p>Código PIX:</p>
            <textarea id="pixTextArea" rows="4" cols="50" readonly>${pixCode}</textarea>
            <button onclick="copiarPix()">Copiar Código PIX</button>
        `;
        document.getElementById("pixCode").style.display = "block";

                    // Gerar QR Code
                    setTimeout(function() {
                        if (window.QRCode) {
                            document.getElementById("qrcode").innerHTML = "";
                            new QRCode(document.getElementById("qrcode"), {
                                text: pixCode,
                                width: 200,
                                height: 200
                            });
                        }
                    }, 200); // Pequeno delay para garantir que a lib carregou
    }
    function copiarPix() {
        const pixTextArea = document.getElementById("pixTextArea");
        pixTextArea.select();
        pixTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand("copy");

        // Mostrar mensagem de copiado
        const copiadoMsg = document.getElementById("copiadoMsg");
        copiadoMsg.style.display = "block";
        setTimeout(() => {
            copiadoMsg.style.display = "none";
        }, 2000); // Esconder a mensagem após 2 segundos
    }
            // Remove linha solta 'qrcode'

            