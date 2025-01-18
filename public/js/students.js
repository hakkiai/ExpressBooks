addStudentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;

    try {
        const response = await fetch('/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });

        // Log the full response for debugging
        console.log('Response status:', response.status);
        const responseBody = await response.json();
        console.log('Response body:', responseBody);

        if (!response.ok) {
            throw new Error(responseBody.message || 'Failed to add student');
        }

        fetchStudents();
        addStudentForm.reset();
    } catch (error) {
        console.error('Error adding student:', error);
        alert(`Error: ${error.message}`);
    }
});