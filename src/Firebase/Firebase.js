import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import { firebaseConfig } from './Firebse.config.js'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let groceries = [];
// Initialize FireStore
const firestoreDB = getFirestore();

// collection Refernce
const colRef = collection(firestoreDB, 'groceries');

const promise = async () => {
    const snapshot = await getDocs(colRef);
    snapshot.docs.forEach(doc => {
        groceries.push({ ...doc.data(), id: doc.id })
    })

   /*  groceries.forEach( item => {
        console.log(item.name, item.quantity, item.price)
    })  */
}
promise()
console.log(groceries)
const groceriesListItems = groceries.map(grocery => `
<li class="list-group-item d-flex justify-content-between align-items-center" aria-current="true">
    ${grocery.name} - Stock: ${grocery.quantity} - Price: ${grocery.price}
            <button type="button" id="${grocery.id}" class="btn btn-primary">Add to Cart</button>
</li>`)
console.log(groceriesListItems)