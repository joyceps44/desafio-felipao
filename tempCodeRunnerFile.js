let heroi = 'Shera';
let xp;
xp = 5000;
if(xp <= 1000){
    xp = 'Ferro';
}else if(xp <= 2000){
    xp = 'Bronze';
}else if( xp <= 5000){
    xp = 'Prata';
}else{
    xp = 'Imortal';
}
console.log = (' O Heroi de nome {heroi} esta no nivel de {xp}');