function getjson(){
    return fetch('./prices.json')
    .then(response => {
        
        return response.json();
    })
    
    
}

async function calcular(){
    var milhas = document.getElementById('milhas')
    var reais = document.getElementById('reais')
    var jsonf = await getjson();
    
    var calculo = (jsonf['azul'] * (milhas.value /1000)).toFixed(2)
    
    reais.value = 'R$ ' + String(calculo)
}
