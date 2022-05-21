function esconderIntervalo() {
    document.getElementById('intervalo').classList.remove('visivel')
}

function mostrarIntervalo() {
    document.getElementById('intervalo').classList.add('visivel')
}

function codificacao() {
    let inputRadio = document.getElementById('b64').checked
    if (inputRadio) {
        function base64() {
            let entrada = document.getElementById('entrada')
            let valor = entrada.value
            let binario = btoa(valor)
            document.getElementById('saida').value = binario
        } base64()
    } else {
        function cifraDeCesar() {
            let inputRadio = document.getElementById('cc').checked
            let texto = document.getElementById('entrada')
            let conteudo = texto.value.toLowerCase()
            let pulo = Number(document.getElementById('intervalo').value)
            if(inputRadio && pulo < 1){
                alert('É NECESSÁRIO INFORMAR O PULO')
            }
            else {
                
            let devolve = ""
            const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
           
            for (let i = 0; i < conteudo.length; i++) {
                let codificada = alfabeto.indexOf(conteudo[i]) + pulo
                if (conteudo[i] === " ") {
                    devolve += " "
                }
                else if (alfabeto.includes(conteudo[i])) {
                    if (codificada > 25) {
                        let diferencaAteZ = 25 - alfabeto.indexOf(conteudo[i])
                        devolve += alfabeto[pulo - diferencaAteZ - 1]
                    } else {
                        devolve += alfabeto[codificada]
                    }
                } 
                else {
                    devolve = ('Sua resposta não foi compatível com o sistema. Adicione somente letras (minúsculas ou maiúsculas)')
                }
            }
            let saida = document.getElementById('saida')
            saida.value = devolve
        }
        } cifraDeCesar()
    }
}

function decodificacao() {
    let inputRadio = document.getElementById('b64').checked
    if (inputRadio) {
        function base64() {
            let entrada = document.getElementById('entrada')
            let valor = entrada.value
            let binario = atob(valor)
            document.getElementById('saida').value = binario
        } base64()
    } else {
        function cifraDeCesar() {
            let inputRadio = document.getElementById('cc').checked
            let texto = document.getElementById('entrada')
            let conteudo = texto.value
            let pulo = Number(document.getElementById('intervalo').value)
            if(inputRadio && pulo<1){
                alert('É NECESSÁRIO INFORMAR O PULO')
            }
            else {
            let devolve = ""
            const alfabeto = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]
            
            for (let i = 0; i < conteudo.length; i++) {
                let codificada = alfabeto.indexOf(conteudo[i]) + pulo
                if (conteudo[i] === " ") {
                    devolve += " "
                }
                else if (alfabeto.includes(conteudo[i])) {
                    if (codificada > 25) {
                        let diferencaAteZ = 25 - alfabeto.indexOf(conteudo[i])
                        devolve += alfabeto[pulo - diferencaAteZ - 1]
                    } else {
                        devolve += alfabeto[codificada]
                    }
                } 
                else {
                    devolve += ('Sua resposta não foi compatível com o sistema. Adicione somente letras (minúsculas ou maiúsculas)')
                }
            }
            let saida = document.getElementById('saida')
            saida.value = devolve
        }
        } cifraDeCesar()
    }
}