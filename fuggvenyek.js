export function eredmenySzamolas(inputElem,eredmenyElem){
let szoveg =""
switch(Number(inputElem.value)){
    case 1:
        szoveg="Elégtelen"
        break;
    case 2:
        szoveg="Elégséges"
        break;
    case 3:
        szoveg="Közepes"
        break;
    case 4:
        szoveg="Jó"
        break;
    case 5:
        szoveg="Jeles"
        break;
    default:
        szoveg="Hibás adat"
        break;
    
    }
eredmenyElem.innerHTML=szoveg
}