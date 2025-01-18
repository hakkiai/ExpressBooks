document.addEventListener('DOMContentLoaded', () => {
    const borrowBookForm = document.getElementById('borrowBookForm');
    const borrowingsTableBody = document.getElementById('borrowingsTableBody');
    const studentSelect = document.getElementById('studentSelect');
    const bookSelect = document.getElementById('bookSelect');

    // Fetch and populate students dropdown
    async function fetchStudents() {
        try {
            const response = await fetch('/students');
            const students = await response.json();
            studentSelect.innerHTML = students.map(student => `
                <option value="${student._id}">${student.name} (${student.email})</option>
            `).join('');
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    }

    // Fetch and populate books dropdown
    async function fetchBooks() {
        try {
            const response = await fetch('/books');
            const books = await response.json();
            bookSelect.innerHTML = books.map(book => `
                <option value="${book._id}">${book.title} by ${book.author}</option>
            `).join('');
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    // Fetch and display borrowing records
    async function fetchBorrowRecords() {
        try {
            const response = await fetch('/borrow');
            const borrowRecords = await response.json();
            borrowingsTableBody.innerHTML = borrowRecords.map(record => `
                <tr>
                    <td>${record.student.name}</td>
                    <td>${record.book.title}</td>
                    <td>${new Date(record.borrowedAt).toLocaleDateString()}</td>
                    <td>
                        <button class="btn btn-sm btn-success return-book" data-id="${record._id}">Return</button>
                    </td>
                </tr>
            `).join('');

            // Add event listeners for return buttons
            document.querySelectorAll('.return-book').forEach(button => {
                button.addEventListener('click', () => returnBook(button.dataset.id));
            });
        } catch (error) {
            console.error('Error fetching borrow records:', error);
        }
    }

    // Borrow a book
    borrowBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const studentId = studentSelect.value;
        const bookId = bookSelect.value;

        try {
            await fetch('/borrow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentId, bookId })
            });
            fetchBorrowRecords();
        } catch (error) {
            console.error('Error borrowing book:', error);
            alert('Failed to borrow book. It might already be borrowed.');
        }
    });

    // Return a book
    async function returnBook(borrowId) {
        if (confirm('Are you sure you want to return this book?')) {
            try {
                await fetch(`/borrow/${borrowId}`, {
                    method: 'DELETE'
                });
                fetchBorrowRecords();
            } catch (error) {
                console.error('Error returning book:', error);
            }
        }
    }

    // Initial fetches
    fetchStudents();
    fetchBooks();
    fetchBorrowRecords();
});