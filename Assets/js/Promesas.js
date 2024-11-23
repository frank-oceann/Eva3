import { db } from "./Firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
export let agregarAuto = async(auto)=>{
    //Algo que agregar
    const docRef = await addDoc(collection(db, "autos"), auto);
}

export let obtenerAutos = async() => {
    const querySnapshot = await getDocs(collection(db, "autos"));
    let autos = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let auto = {
    'id': doc.id,
    'nombre': doc.data().nombre,
    'marca': doc.data().marca,
    'anio': doc.data().anio,
    'kilometraje': doc.data().kilometraje,
    'tipo': doc.data().tipo,
    'usado': doc.data().usado

  }
  autos.push(auto)
  console.log(doc.id, " => ", doc.data());
});
return autos;

}