var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUsersTest } from "./assets/js/server/getUsersTest.js";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Appel de la fonction et capture du résultat
            const result = yield getUsersTest();
            // Affichage du résultat dans la console
            console.log('Result:', result);
        }
        catch (error) {
            // Gestion des erreurs potentielles
            console.error('Error:', error);
        }
    });
}
test();
