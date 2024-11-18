var firebaseConfig = {
apiKey: "AIzaSyAn0rRvInY8z2XsOMulwNpv9ckU-OKB2CY",
authDomain: "smh-iot-2e746.firebaseapp.com",
databaseURL: "https://smh-iot-2e746-default-rtdb.firebaseio.com",
projectId: "smh-iot-2e746",
storageBucket: "smh-iot-2e746.appspot.com",
messagingSenderId: "639089713442",
appId: "1:639089713442:web:72bc80c666315b0e49057b",
measurementId: "G-GJYH1F0S3D"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//SLIDER PUMP
// var sliderpump = document.getElementById("slider-water");
// sliderpump.oninput = function(){
//     var firebaseRef = firebase.database().ref().child("/IOT/pumpwater");
//     firebaseRef.set(sliderpump.value);     
// }
// //Status PUMP
// database.ref("/IOT/pumpwater").on("value", function(snap){      
//     sliderpump.value = snap.val();
// });

// Y1 - DOOR
// Y2 - LED 1

// Y3 - FAN 1
// Y4 - LED 2

// Y5 - FAN 2
// Y6 - LED 3

// Y7 - LED 4

// X1 - DHT11 T
// X2 - DHT11 H
// X3 - MQ2
// X4 - IR


//Y1
var Y1 = 1;
var onbt1 = document.getElementById("act"+ Y1);
onbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y1 : 1
    });
}
var offbt1 = document.getElementById("unact"+ Y1);
offbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y1 : 0
    });
}

database.ref("/TEKYQ3/farm/I/Y1").on("value", function(snapshot){
    var ssled = snapshot.val();
    if(ssled==1){
        document.getElementById("unact" + Y1).style.display = "block";
		document.getElementById("act" + Y1).style.display = "none";
        document.getElementById("unst"+ Y1).style.display = "block";
		document.getElementById("ast"+ Y1).style.display = "none";
    }
    else{
        document.getElementById("unact"+ Y1).style.display = "none";
		document.getElementById("act"+ Y1).style.display = "block";
        document.getElementById("unst"+ Y1).style.display = "none";
		document.getElementById("ast"+ Y1).style.display = "block";
    }
})

//Y2
var Y2 = 2;
var onbt1 = document.getElementById("act"+ Y2);
onbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y2 : 1
    });
}
var offbt1 = document.getElementById("unact"+ Y2);
offbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y2 : 0
    });
}

database.ref("/TEKYQ3/farm/I/Y2").on("value", function(snapshot){
    var ssled = snapshot.val();
    if(ssled==1){
        document.getElementById("unact" + Y2).style.display = "block";
		document.getElementById("act" + Y2).style.display = "none";
        document.getElementById("unst"+ Y2).style.display = "block";
		document.getElementById("ast"+ Y2).style.display = "none";
    }
    else{
        document.getElementById("unact"+ Y2).style.display = "none";
		document.getElementById("act"+ Y2).style.display = "block";
        document.getElementById("unst"+ Y2).style.display = "none";
		document.getElementById("ast"+ Y2).style.display = "block";
    }
})

//Y3
var Y3 = 3;
var onbt1 = document.getElementById("act"+ Y3);
onbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y3 : 1
    });
}
var offbt1 = document.getElementById("unact"+ Y3);
offbt1.onclick = function(){
    database.ref("/TEKYQ3/farm/I").update({
        Y3 : 0
    });
}

database.ref("/TEKYQ3/farm/I/Y3").on("value", function(snapshot){
    var ssled = snapshot.val();
    if(ssled==1){
        document.getElementById("unact" + Y3).style.display = "block";
		document.getElementById("act" + Y3).style.display = "none";
        document.getElementById("unst"+ Y3).style.display = "block";
		document.getElementById("ast"+ Y3).style.display = "none";
    }
    else{
        document.getElementById("unact"+ Y3).style.display = "none";
		document.getElementById("act"+ Y3).style.display = "block";
        document.getElementById("unst"+ Y3).style.display = "none";
		document.getElementById("ast"+ Y3).style.display = "block";
    }
})


// //Y7
// var Y7 = 7;
// database.ref("/TEKYQ3/smh/O/Y7").on("value", function(snapshot){
//     var alam = snapshot.val();
//     if(alam==1){
//         document.getElementById("unalam" + Y7).style.display = "block";
// 		document.getElementById("actalam" + Y7).style.display = "none";
//         document.getElementById("unalam"+ Y7).style.display = "block";
// 		document.getElementById("actalam"+ Y7).style.display = "none";
//     }
//     else{
//         document.getElementById("unalam"+ Y7).style.display = "none";
// 		document.getElementById("actalam"+ Y7).style.display = "block";
//         document.getElementById("unalam"+ Y7).style.display = "none";
// 		document.getElementById("actalam"+ Y7).style.display = "block";
//     }
// })

//X1
database.ref("/TEKYQ3/farm/I/X1").on("value", function(snapshot){
    var X1 = snapshot.val();
    document.getElementById("humd").innerHTML = X1;
})

//X2
database.ref("/TEKYQ3/farm/I/X2").on("value", function(snapshot){
    var X2 = snapshot.val();
    document.getElementById("temp").innerHTML = X2;
})

//X3
database.ref("/TEKYQ3/farm/I/X3").on("value", function(snapshot){
    var X3 = snapshot.val();
    X3 = X3*100/1024;
    X3 = X3.toFixed(2);
    document.getElementById("soil").innerHTML = X3;
})
