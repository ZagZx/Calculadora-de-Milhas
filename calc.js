function getjson(){
    return fetch('https://calculadora-de-milhas-aef3f-default-rtdb.firebaseio.com/.json')
    .then(response => {
        
        return response.json();
    })
    
    
}
function piscar_cor(){
    milhas.style.color = 'black'
}

async function calcular(){
    const milhas = document.getElementById('milhas')
    const reais = document.getElementById('reais')
    const select = document.getElementById('companhia')

    if (select.value != "nulo"){
        const jsonf = await getjson();
    
        var calculo = (jsonf[select.value] * (milhas.value /1000)).toFixed(2)
        
        reais.value = 'R$ ' + String(calculo)

    }
    else{
        milhas.style.color = 'red'
        setTimeout(piscar_cor,1000)
        
        
       
    }
}
