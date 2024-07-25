function getjson(){
    return fetch('https://calculadora-de-milhas-aef3f-default-rtdb.firebaseio.com/.json')
    .then(response => {
        
        return response.json();
    })
    
    
}
//FALTA FAZER A AUTENTICAÇÃO NO FIREBASE
async function postjson(){
    const latam = document.getElementById('latam_input')
    const gol = document.getElementById('gol_input')
    const azul = document.getElementById('azul_input')

    const prices = {"latam":Number(latam.value),"gol":Number(gol.value), "azul": Number(azul.value)}

    
    

    
    fetch('https://calculadora-de-milhas-aef3f-default-rtdb.firebaseio.com/.json')
    .then(response => {return response.json()})
    .then(jsonData =>{
        for (var comp in prices){
            if (prices[comp] != ''){
                switch (comp){
                    case 'latam':
                        jsonData.latam = prices[comp]
                    
                    case 'gol':
                        jsonData.gol = prices[comp]
                    
                    case 'azul':
                        jsonData.azul = prices[comp]
                    
                }
                
            }
        }
        console.log(jsonData)
        return fetch('https://calculadora-de-milhas-aef3f-default-rtdb.firebaseio.com/.json', {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(jsonData)
        })
    })
        
    
        
}