//datos utiles
// nombre,apellido,departamento son tipo string por lo tanto van entre ""
// las evidiencias son datos de tipo boleano (true/false)
//los puntajes,promedio y lecciones de CT son datos tipo numerico
// .tofixed(2) se usa para mostrar solo 2 digitos despues de la coma 


function statusFinalJap(nombre,apellido,departamento,puntajeEvaluacionDeFundamentos,puntajeProgImperatiperativa,
    puntajeProgOrientadaObjetos,evidenciaFundamentos,evidenciaImperativa,evidenciaProgOrientadaObjetos,
    promedioIngles,leccionesCT){

        // definimos la variable "puntajeProgramacion" promediando los puntajes de fundamentos,imperativa,objetos

        let puntajeProgramacion = (puntajeEvaluacionDeFundamentos*0.3) + (puntajeProgImperatiperativa*0.5) + (puntajeProgOrientadaObjetos*0.2)
        
        //definimos la variable "evidenciasPresentadas" que es la suma total de evidencias
       
        let evidenciasPresentadas = evidenciaFundamentos + evidenciaImperativa + evidenciaProgOrientadaObjetos


    if (promedioIngles >= 50 & leccionesCT === 10 & puntajeProgramacion >= 60 & evidenciasPresentadas === 3 ){

    console.log(`Localidad: ${departamento} 

    Hola ${nombre} ${apellido}, a continuacion se detalla tu status final en el curso de JAP: 
    
    promedio Ingles: ${promedioIngles} 
    
    Lecciones CT: ${leccionesCT} 
    
    Promedio tecnico: ${puntajeProgramacion}
    
    Evidencias entregadas: ${evidenciasPresentadas}
    
    por lo tanto tu status final es promobido directamente con: ${puntajeProgramacion.toFixed(2)} Felicitaciones por tu promocion! 

    `);
    
}

    else if  (promedioIngles >= 50 && leccionesCT === 10 && puntajeProgramacion >= 60 && evidenciasPresentadas < 3 ){

        console.log(`Localidad: ${departamento} 
    
        Hola ${nombre} ${apellido}, a continuacion se detalla tu status final en el curso de JAP: 
        
        promedio Ingles: ${promedioIngles} 
        
        Lecciones CT: ${leccionesCT} 
        
        Promedio tecnico: ${puntajeProgramacion}
        
        Evidencias entregadas: ${evidenciasPresentadas} 
        
        Por lo tanto tu status final es: INSUFICIENTE PARA APROBAR, ya que no entregaste el total requerido de evidencias
 requeridas para aprobar por lo tanto debes rendir un examen final con supervisión y obtener 60% o más para aprobar.
    
        `);
        
}

    else if (promedioIngles >= 50 && leccionesCT === 10 && puntajeProgramacion >= 50 && puntajeProgramacion < 60 && evidenciasPresentadas === 3 )
    
    {
    
    console.log(`Localidad: ${departamento} 
    
        Hola ${nombre} ${apellido}, a continuacion se detalla tu status final en el curso de JAP: 
        
        promedio Ingles: ${promedioIngles} 
        
        Lecciones CT: ${leccionesCT} 
        
        Promedio tecnico: ${puntajeProgramacion}
        
        Evidencias entregadas: ${evidenciasPresentadas} 
        
        Por lo tanto tu status final es: INSUFICIENTE PARA APROBAR, ya tu promedio tecnico no supera el 60% requerido pero
        devido a que se encuentra entre el 50% y 59.99% puedes rendir un examen final con supervisión y obtener 60% o más para aprobar.
    
        `);
    }



else { console.log(`Localidad: ${departamento} 
    

Hola ${nombre} ${apellido}, Lamentablemente no has alcanzado los requisitos mininos para pasar a la fase 2 
te esperamos en la próxima edición de JAP saludos del equipo de JAP y esperamos volver a verte.`);

}    

  };
    
    //test 1: alumno cumple con todos los requisitos para aprobar directamente 
    console.log(statusFinalJap("Bill","Gates","montevideo",80,70,90,true,true,true,75,10));

    //test 2: alumno cumple con todos los requisitos pero su promedio tecnico esta entre 50 y 60%
    console.log(statusFinalJap("Bill","Gates","montevideo",55,55,50,true,true,true,75,10));

    //test 3: alumno cumple con todos los requisitos pero su promedio de ingles es menor a 50%
    console.log(statusFinalJap("Bill","Gates","montevideo",80,90,100,true,true,true,49,10));

    //test 4: alumno cumple con todos los requisitos pero entrego menos de 3 evidencias
    console.log(statusFinalJap("Bill","Gates","montevideo",80,90,100,false,true,true,65,10));

    //test 5: alumno cumple con todos los requisitos pero las CT estan incompletas
    console.log(statusFinalJap("Bill","Gates","montevideo",80,90,100,true,true,true,60,8));

    //test 6: alumno no cumple con los requisitos minimos de aprobacion
    console.log(statusFinalJap("Bill","Gates","montevideo",80,90,100,true,true,false,49,10));
