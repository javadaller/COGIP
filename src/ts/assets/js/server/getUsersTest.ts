export async function getUsersTest() {
    try {
        const request = await fetch(`/api/users/getAllUsers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }

        const result = await request.json();
        console.log(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error:', error);
        alert(`Error: `+error.message);
    }
}
