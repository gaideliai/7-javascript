"use strict"

function skaitmenuKiekisSkaiciuje(num, correct){
    let count =0;
    if (typeof(num) !=='number'){
        return console.error("ERROR: skaicius netinkamo tipo");
    }
    if (!isFinite(num)){
        return console.error("ERROR: skaicius netinkamo tipo");
    }

    const skaiciusTekstu =''+num;
    count=skaiciusTekstu.length;

    if(num<0){
        count--;
    }

    if(num%1!==0){
        count--;
    }
    
    return console.log(count, '-->', correct);
    
}
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( 'asd' );
skaitmenuKiekisSkaiciuje( [51, 488] );
skaitmenuKiekisSkaiciuje( [] );
skaitmenuKiekisSkaiciuje( ['asd', 'dfg'] );
skaitmenuKiekisSkaiciuje( null);
skaitmenuKiekisSkaiciuje( Infinity );
skaitmenuKiekisSkaiciuje( NaN );
skaitmenuKiekisSkaiciuje( -Infinity );

skaitmenuKiekisSkaiciuje( 5, 1 );
skaitmenuKiekisSkaiciuje( 781, 3 );
skaitmenuKiekisSkaiciuje( 37060123456, 11 );
skaitmenuKiekisSkaiciuje( 5.55, 3 );
skaitmenuKiekisSkaiciuje( -5, 1 );
skaitmenuKiekisSkaiciuje( -5.55, 3 );
skaitmenuKiekisSkaiciuje( 4444444444444444444444444444444444444, 36);



