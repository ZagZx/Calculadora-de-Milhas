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
    const taxainput = document.getElementById('taxa')
    const select = document.getElementById('companhia')
    const taxa_pessoa = document.getElementById('taxa/p')
    
    const taxa_sel = document.getElementById('parcelas')
    const taxa = Number(taxa_sel.value) / 100

    if (select.value != "nulo"){
        const jsonf = await getjson();
        
        let calculo = ((jsonf[select.value] * (milhas.value /1000)) + Number(taxa_pessoa.value)).toFixed(2)
        let taxacalc = ((jsonf[select.value] * (milhas.value/1000)) + Number(taxa_pessoa.value))
        taxacalc = (taxacalc + taxacalc * taxa).toFixed(2)
        reais.value = 'R$ ' + String(calculo)
        taxainput.value =  'R$ ' + String(taxacalc)

    }
    else{
        milhas.style.color = 'red'
        setTimeout(piscar_cor,1000)
        
        
       
    }
}
