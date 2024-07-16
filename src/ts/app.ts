import { getUsersTest } from "./assets/js/server/getUsersTest.js";

async function test() {
    try {
        // Appel de la fonction et capture du résultat
        const result = await getUsersTest();
        
        // Affichage du résultat dans la console
        console.log('Result:', result);
    } catch (error) {
        // Gestion des erreurs potentielles
        console.error('Error:', error);
    }
}
test()