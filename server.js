const express = require('express')
const app = express()
const PORT = 8000

const rappers  = {
    '21 savage':{                            // creates an object for our api to respond in Json
    'birthName' : 29,
    'birthplace': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, Engalnd'
},
'chance the rapper':{                            // creates an object for our api to respond in Json
    'birthName' : 29,
    'birthplace': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
},
'unknown':{                            // creates an object for our api to respond in Json
    'birthName' : 0,
    'birthplace': 'Unknown',
    'birthLocation': 'Unknown'
}

}

app.get('/', (request, response)=>{                 // serves up just HTML
    response.sendFile(__dirname + '/index.html')   // __ dirname  tells where to start looking for the html
})

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()  // yoinks name outta url submitted,  toLowerCase() makes sure its all in lowercase
    
    if (rappers[rapperName]){                   // conditional to check if '(rappers[rapperName])' exists, if so do stuff
        response.json(rappers[rapperName])           // sets up server to response with some JSON  (rappers[rapperName])
    }else {
        response.json(rappers['unknown'])
    }         
              
})
app.listen(PORT,()=>{
    console.log(`This server is running on port ${PORT}, catch it!!`)  // set the server to listen on 8000
})