import React from 'react'

export default function Books({ books, deleteBook, giveBook, bringBook }) {
    return (
        <div className="container mt-5">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Sections</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" colSpan="3">Process</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            return (
                                <tr scope="col" key={index}>
                                    <td scope="col">{book._id}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.section}</td>
                                    <td>{book.quantity}</td>
                                    <td><button onClick={() => deleteBook(book._id)} className="btn btn-danger">DELETE</button></td>
                                    <td><button onClick={() => giveBook(book._id)} className="btn btn-warning">GIVE</button></td>
                                    <td><button onClick={() => bringBook(book._id)} className="btn btn-success">BRING</button></td>




                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
