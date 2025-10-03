const herois =[
['Shera', 7500],
['Heman', 6000],
['Jaspion', 4000],
['Dragon', 5000],
['Devoit', 8000]
];

for (let i = 0; i < herois.length; i++) {
	const nome = herois[i][0];
    const xp = herois[i][1];
    let nivel = '';
    
	if ( xp < 1000) {
    	nivel = 'Ferro';
    } else if (xp <= 2000) {
    	nivel = 'Bronze';
    } else if (xp <= 5000) {
    	nivel = 'Prata';
    } else if (xp <= 7000) {
    	nivel = 'Ouro';
    } else if (xp <= 8000) {
    	nivel = 'Platina';
    } else if (xp <= 9000) {
    	nivel = 'Ascendente';
    } else {
    	nivel = 'Radiante';
    }
    
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
 
    