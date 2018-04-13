function mensaje() {
    alert("hola");
}

function muestraTexto() {
    var elemento=document.getElementById("parrafo1");
    elemento.innerHTML="texto cambiado <strong> con negrita </strong>"; //Cambia el contenido que tiene el elemento y añadimos la negrita en html.
    //alert(elemento);
}

function concatenaNombre() {
    var nombre=document.getElementById("nombre").innerHTML;
    var apellido=document.getElementById("apellidos").innerHTML;
    
    document.getElementById("nombrecompleto").innerHTML=nombre + " " + apellido;
}

function sumar(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var total=num1+num2;
    
    document.getElementById("resultado").value=total;
}

function restar(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var total=num1-num2;
    
    document.getElementById("resultado").value=total;
}

function multi(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var total=num1*num2;
    
    document.getElementById("resultado").value=total;
}

function dividir(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var total=num1/num2;
    
    document.getElementById("resultado").value=total;
}

function elevar(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var total=Math.pow(num1,num2);
    document.getElementById("resultado").value=total;
}

function comprobar(){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);

    if(num1%2!==0 && num2%2!==0){
        document.getElementById("resultado").value="Los dos son impares";
    }
    else if(num1%2!==0){
        document.getElementById("resultado").value="el primer numero no es par";
    }
    else if(num2%2!==0){
        document.getElementById("resultado").value="El segundo numero no es par";
    }
    else if(num1%2===0 && num2%2===0){
        document.getElementById("resultado").value="Son pares";
    }
}
/*  funcion conjunta de lo de arriba
    function calculadora(op){
    var num1=parseFloat(document.getElementById("numero1").value);
    var num2=parseFloat(document.getElementById("numero2").value);
    var operacion= op;
    var total;
    switch(operacion){
        case "suma":
            total=num1+num2;
            document.getElementById("resultado").value=total;
        break;
        case "resta":
            total=num1-num2;
            document.getElementById("resultado").value=total;
        break;
        case "multiplicacion":
            total=num1*num2;
            document.getElementById("resultado").value=total;
        break;
        case "division":
            total=num1/num2;
            document.getElementById("resultado").value=total;
        break;
        case "elevar":
            total=num1**num2;
            document.getElementById("resultado").value=total;
        break; 
    }
}*/

/*function suma(a,b){
    return a+b;
}*/
/*function hacerclic(){
    document.querySelectorAll("#principal p");
    lista[0].onclick=mensaje;
}*/

function arrayCoches(){
    var coches= ["Fiat", "Ford", "Seat"];
    //coches.push("Mercedes"); añadir un campo al array
    var texto="<ul>";
    for (i=0;i<coches.length;i++){
        texto+="<li>" + coches[i] + "</li>";
    }
    texto+="</ul>";
    document.getElementById("listadocoches").innerHTML=texto;
    //coches.join(","); separa los valores del array con una coma
    //coches.shift(); borra el primer elemento del array     coches.unshift(); añade un elemento al principio del array
    //delete coches[cualquiera] borra ese elemento
    //coches.splice(2,0,"audi") donde lo añades, eliminas o no los que quieras a partir de esta posicion y luego ya los elementos
    //coche.concat(coches1); se unen el primer array con el que pongamos despuies
    //coches.toString(); muestra los elemento del array en cadena
    //coches.sort(); ordena en orden alfabetico usar luego coches.reverse(), para ordenarlo al reves.
    //coches.sort(function (a,b), function(a-b)); saca alfabetico los numeros
    
    /*var alumnos=[
        {nombre:"jose" , peso:"90" , altura:"1.85"},
        {nombre:"l" , peso:"80" , altura:"1.80"}]
        alumnos[1].peso;
     */
}

function peso(){
    var cont, i;
    //alert("escribeme 5 pesos que usted quiera");
    //var pesoPersonas=[prompt("primer peso"),prompt("segundo peso"),prompt("tercero peso"),prompt("cuarto peso"),prompt("quinto peso")];
    //var pesoPersonas=[80,90,67,76,99,55];
    var pesoPersonas=new Array(5);
    var pesos=1;
    cont=0;
    for(i=0;i<pesoPersonas.length;i++){
        pesoPersonas[i]=prompt("escribe un peso para "+ pesos);
        pesos++;
        if (pesoPersonas[i]>80){
            cont++;
        }
    }
    document.getElementById("pesos").innerHTML=cont;
}

function nota(){
    var i,array,susp,aptos,bien,notable,sobre,maho;
    susp=0;
    aptos=0;
    bien=0;
    notable=0;
    sobre=0;
    maho=0;
    array=new Array(12);
    
    for(i=0;i<array.length;i++){
        array[i]=Math.random()*10;
        array[i]=array[i].toFixed(1);
        if(array[i]<=5){
            susp++;
        }
        else if(array[i]>=5 && array[i]<6){
            aptos++;
        }
        else if(array[i]>=6 && array[i]<7){
            bien++;
        }
        else if(array[i]>=7 && array[i]<8.5){
            notable++;
        }
        else if(array[i]>=8.5 && array[i]<10){
            sobre++;
        }
        else if(array[i]==10){
            maho++;
        }
    }
    var texto="<ul>";
    texto+="<li>" + "<strong>Suspensos: </strong>" + susp + "</li>";
    texto+="<li>" + "<strong>Aptos: </strong>" + aptos + "</li>";
    texto+="<li>" + "<strong>Bien: </strong>" + bien + "</li>";
    texto+="<li>" + "<strong>Notables: </strong>" + notable + "</li>";
    texto+="<li>" + "<strong>Sobresalientes: </strong>" + sobre + "</li>";
    texto+="<li>" + "<strong>Matriculas de Honor: </strong>" + maho + "</li>";
    texto+="</ul>";
    document.getElementById("notas").innerHTML=texto;
}

function complejo(){
       var trabajadores, i, menoscobra, mastrabaja, sueldomedio, menostrabaja,horamedia;
       menoscobra=0;
       menostrabaja=0;
       mastrabaja=0;
       sueldomedio=0;
       horamedia=0;
       trabajadores=[
        {nombre:"Marta",sueldo:1000,horas:50},
        {nombre:"Javier",sueldo:3500,horas:100},
        {nombre:"Pepe",sueldo:800,horas:100},
        {nombre:"sandra",sueldo:950,horas:95},
        {nombre:"Pepe",sueldo:2700,horas:90}];
       
       trabajadores.push({nombre:"Raquel", sueldo:300, horas:30});
       //trabajadores.splice(2,1); elimina a pepe
       
        for(i=0;i<trabajadores.length;i++){
            sueldomedio+=trabajadores[i].sueldo;
            horamedia+=trabajadores[i].horas;
                if(trabajadores[i].sueldo<trabajadores[menoscobra].sueldo){
                    menoscobra=i;
                }
                if(trabajadores[i].horas>trabajadores[mastrabaja].horas){
                    mastrabaja=i;
                }
                if(trabajadores[i].horas<trabajadores[menostrabaja].horas){
                    menostrabaja=i;
                }
        }
        var texto="<ul>";
        texto+="<li>" + "<strong>Menos cobra: </strong>" + trabajadores[menoscobra].nombre + " " + trabajadores[menoscobra].sueldo + "</li>";
        texto+="<li>" + "<strong>Mas trabaja: </strong>" + trabajadores[mastrabaja].nombre + " " + trabajadores[mastrabaja].horas + "</li>";
        texto+="<li>" + "<strong>Menos trabaja: </strong>" + trabajadores[menostrabaja].nombre + " " + trabajadores[menostrabaja].horas + "</li>";
        texto+="<li>" + "<strong>Sueldo Medio: </strong>" + (sueldomedio/trabajadores.length).toFixed(2) + "</li>";
        texto+="<li>" + "<strong>horas de Media: </strong>" + (horamedia/trabajadores.length).toFixed(2) + "</li>";
        texto+="</ul>";
        document.getElementById("empleados").innerHTML=texto;
}
//campos de la tabla en funcion
function ejem(){
    var dataSet = [
    [ "Javier", 3500, 100],
    [ "Fran", 2000, 200],
    [ "Ana", 2750, 100]
    ];
    return dataSet;
}
