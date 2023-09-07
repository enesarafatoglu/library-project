import React from 'react'

export default function AddBook({ book, handleChange, addBook }) {
    return (
        <div>
            <div className="container w-50 mt-5 border border-secondary">
                <form style={{ padding: "20px 20px 10px 20px" }}>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.bookName} onChange={handleChange} name="bookName" className="form-control" id="floatingInput" placeholder="bookName" />
                        <label for="floatingInput">Book Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.author} onChange={handleChange} name="author" className="form-control" id="floatingInput" placeholder="author" />
                        <label for="floatingInput">Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" value={book.quantity} onChange={handleChange} name="quantity" className="form-control" id="floatingInput" placeholder="quantity" />
                        <label for="floatingInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" value={book.section} onChange={handleChange} id="floatingSelect" name="section" aria-label="Floating label select example">
                            <option selected>Sections</option>
                            <option value="Scientific">Scientific</option>
                            <option value="Sports">Sports</option>
                            <option value="Detective">Detective</option>
                            <option value="Children's">Children's</option>
                            <option value="Horror">Horror</option>
                            <option value="Tragedy">Tragedy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Western">Western</option>
                            <option value="Philosophy">Philosophy</option>

                        </select>
                        <label for="floatingSelect">Select Section</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" value={book.comments} onChange={handleChange} placeholder="Leave a comment here" name="comments" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button type="button" onClick={addBook} className="btn btn-dark">Add Book</button>
                </form>
            </div>

        </div>
    )
}
