function BookForm() {
  return (
    <div className="form-container">
      <h2>New Book</h2>
      <form>
        <div className="form-control">
          <label>Product name:</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Description:</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Price:</label>
          <input type="number" />
        </div>
        <button className="btn primary">Save</button>
      </form>
    </div>
  );
}
export default BookForm;
