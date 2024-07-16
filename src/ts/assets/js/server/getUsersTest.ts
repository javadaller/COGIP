export async function getUsersTest() {
    try {
        const request = await fetch(`http://localhost:5173/api/users/getAllUsers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const rawResponse = await request.text()
        console.log('Raw response:', rawResponse)

        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`)
        }

        const result = JSON.parse(rawResponse)
        console.log('Result:', result)

        return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error:', error)
        alert(`Error: `+error.message)
    }
}
