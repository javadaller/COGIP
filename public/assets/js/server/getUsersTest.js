var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getUsersTest() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = yield fetch(`http://localhost:5173/api/users/getAllUsers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const rawResponse = yield request.text();
            console.log('Raw response:', rawResponse);
            if (!request.ok) {
                throw new Error(`HTTP error! Status: ${request.status}`);
            }
            const result = JSON.parse(rawResponse);
            console.log('Result:', result);
            return result;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            console.error('Error:', error);
            alert(`Error: ` + error.message);
        }
    });
}
