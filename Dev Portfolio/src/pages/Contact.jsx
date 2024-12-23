export default function Contact() {
  return (
    <>
      {/* Don't forget to fill in 'action' to send contact info to email */}
      <div className="form-container">
        <form className="mb3">
          <div className="form-name-container">
            <label
              htmlFor="name"
              className="form-name-label"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-name-input"
            />
          </div>

          <div className="form-email-container">
            <label
              htmlFor="email"
              className="form-email-label"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-email-input"
            />
          </div>

          <button
            type="submit"
            className="form-submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

