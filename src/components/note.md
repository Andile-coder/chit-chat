const handleDelete = async (id) => {
const docRef = doc(db, "restuarants", id);
await deleteDoc(docRef);
};
const handleEdit = async (id) => {
const name = prompt("enter name");
const city = prompt("enter city");
const docRef = doc(db, "restuarants", id);
const payload = { name: name, city: city };
await setDoc(docRef, payload);
};
const handleQueryDelete = async () => {
const name = prompt("enter name");
const collectionref = collection(db, "restuarants");
const q = query(collectionref, where("name", "==", name));
const snapshot = await getDocs(q);
console.log(snapshot);
const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
results.forEach(async (result) => {
const docRef = doc(db, "restuarants", result.id);
await deleteDoc(docRef);
});
