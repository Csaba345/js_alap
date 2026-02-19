import { adatLista } from "./adat.js";
import {eredmenySzamolas} from "./fuggvenyek.js";

let gombElem=document.getElementById("gomb")
let inputElem=document.getElementById("ertekeles")
let eredmenyElem=document.getElementById("eredmeny")

gombElem.addEventListener("click",function (){
    eredmenySzamolas(inputElem,eredmenyElem)})


export function Veletlenszamokkal (atlagElem, adatLista){
    for(let i = 0;i<adatLista;i++){
        
    }
}

