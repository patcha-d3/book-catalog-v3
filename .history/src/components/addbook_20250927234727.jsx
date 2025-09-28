function BookForm() {
  return (
    <div className="form-container">
      <h2>New Book</h2>
      <form>
        <div className="form-control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Author</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Publisher</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Publication Year</label>
          <input type="number" />
        </div>
        <div className="form-control">
          <label>Language</label>
          <input type="text" />
        </div>

        <button className="btn primary">Save</button>
      </form>
    </div>
  );
}
export default BookForm;
