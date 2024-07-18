import { getUsersTest } from "./assets/js/server/getUsersTest.js"

async function test() {
    try {
        const result = await getUsersTest()
        console.log('Result:', result)
    } catch (error) {
        console.error('Error:', error)
    }
}
test()