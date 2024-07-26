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

    
    //"latam":Number(latam.value),"gol":Number(gol.value), "azul": Number(azul.value)
    var prices = {}

    if (latam.value != ''){
        prices['latam'] = Number(latam.value)
    }

    if (gol.value != ''){
        prices['gol'] = Number(gol.value)
    }

    if (azul.value != ''){
        prices['azul'] = Number(azul.value)
    }

    

    if (Object.keys(prices).length != 0){
        fetch('https://calculadora-de-milhas-aef3f-default-rtdb.firebaseio.com/.json')
        .then(response => {return response.json()})
        .then(jsonData =>{
            
            for (var comp in prices){
                if (prices[comp] != 0){
                    if (comp == 'latam'){
                        jsonData.latam = prices[comp]
                    }
                    else if (comp == 'gol'){
                        jsonData.gol = prices[comp]
                    }
                    else if (comp == 'azul'){
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
    else{
        console.log('Sem alterações')
    }
    
        
}

