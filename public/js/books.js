document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('addBookForm');
    const booksTableBody = document.getElementById('booksTableBody');

    async function fetchBooks() {
        try {
            const response = await fetch('/books');
            const books = await response.json();
            booksTableBody.innerHTML = books.map(book => `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.borrowCount || 0}</td>
                    <td>
                        <button class="btn btn-sm btn-warning edit-book" data-id="${book._id}">Edit</button>
                        <button class="btn btn-sm btn-danger delete-book" data-id="${book._id}">Delete</button>
                    </td>
                </tr>
            `).join('');


            document.querySelectorAll('.edit-book').forEach(button => {
                button.addEventListener('click', () => editBook(button.dataset.id));
            });

            document.querySelectorAll('.delete-book').forEach(button => {
                button.addEventListener('click', () => deleteBook(button.dataset.id));
            });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }


    addBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;

        try {
            await fetch('/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, author })
            });
            fetchBooks();
            addBookForm.reset();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    });


    async function editBook(bookId) {
        try {
            // Fetch current book details
            const response = await fetch(`/books/${bookId}`);
            const book = await response.json();

            const newTitle = prompt('Enter new book title:', book.title);
            const newAuthor = prompt('Enter new book author:', book.author);

            if (newTitle && newAuthor) {
                await fetch(`/books/${bookId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        title: newTitle, 
                        author: newAuthor 
                    })
                });
                fetchBooks();
            }
        } catch (error) {
            console.error('Error editing book:', error);
        }
    }


    async function deleteBook(bookId) {
        if (confirm('Are you sure you want to delete this book?')) {
            try {
                await fetch(`/books/${bookId}`, {
                    method: 'DELETE'
                });
                fetchBooks();
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        }
    }

    fetchBooks();
});
