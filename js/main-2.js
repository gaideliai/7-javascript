const t1 = 'vardenis';
const t2 = 'pavardenis';

const t12 = t1+' '+t2;
console.log(t1, t2, t12);
console.log('As esu: '+t12+'.');

console.log('------');


const pazymiai = [10,5,2,8];
console.log(pazymiai);
console.log('Finalinis rezultatas:', );

console.log('Pirmas narys:', pazymiai[0]);
console.log('Pirmas narys:', pazymiai[1]);
console.log('Pirmas narys:', pazymiai[2]);
console.log('Pirmas narys:', pazymiai[3]);

const altern = pazymiai[0]-pazymiai[1]+pazymiai[2]-pazymiai[3];
console.log('Finalinis rezultatas:', altern);

const suma = pazymiai[0]+pazymiai[1]+pazymiai[2]+pazymiai[3];
const kiekis = pazymiai.length;
const vidurkis = suma / kiekis;
console.log("pazymiu vidurkis: "+vidurkis);

// const sakinys = 'Zodzio "Vardenis" ilgis yra 8 simboliai.'
const sakinys = 'Zodzio "' +t1+ '" ilgis yra ' + t1.length + ' simboliai.'
console.log(sakinys);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const s1=4;
const s2=7;

// >, <, >=, <=, (==, !=,) ===, !==
if (s1==s2) {
    console.log(true);
    
}else{
    console.log(false);
    
}
console.log('-------');



for (let i=0; i<10; i++){
    console.log(i);
}

console.log('-------');

const nuo=0;
const iki=4;
let sum=0;

for (let i=nuo; i<=iki; i++){
    sum=sum+i;
}

console.log('Suma intervale nuo ' +nuo+' iki '+iki+' yra lygi '+sum);