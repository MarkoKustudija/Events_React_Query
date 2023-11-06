import { useRef } from "react";

function FindEventSection() {

  const searchElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id ="search-form">
          <input 
          type="search"
          placeholder="Search events"
          ref={searchElement}/>
          <button> Searh </button>
        </form>
        <p>Please enter a search term and to find events.</p>
      </header>
    </section>
  )
}

export default FindEventSection