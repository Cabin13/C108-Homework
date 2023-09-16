function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fIDkeG5uN/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("model loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        var random1= Math.floor(Math.random()*255)+1
        var random2= Math.floor(Math.random()*255)+1
        var random3= Math.floor(Math.random()*255)+1
        document.getElementById("sound").innerHTML= results[0].label
        document.getElementById("accuracy").innerHTML= (results[0].confidence*100).toFixed(2) + "%"
        var img= document.getElementById("img")
        
        if (results[0].label=="Dog") {
            img.src= "5c1b1fe276c5779e446056e046b49fbe.jpg"
        }
        
        if (results[0].label=="Cat") {
            img.src= "3e6420e4b8794bae7463e071dcb238b3.jpg"
        }
        
        if (results[0].label=="Bird") {
            img.src= "10.screen_shot_2022-05-09_at_11.28.00_am_1024x1024.png"
        }
        
        if (results[0].label=="Lion") {
            img.src= "Screenshot 2023-09-16 175210.png"
        }
    }
}