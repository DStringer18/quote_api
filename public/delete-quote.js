const deleteByIdButton = document.getElementById('delete-by-id');
const deletedQuoteContainer = document.getElementById('deleted-quote-container');

const quoteText = document.querySelector('.quote');
const attributionText = document.querySelector('.attribution');

const resetQuotes = () => {
  quoteContainer.innerHTML = '';
}

deleteByIdButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  fetch(`/api/quotes/${id}`, { method: 'DELETE' })
  .then(response => {
    return response.json()
  })
  .then(({ quote }) => {
    console.log(quote)
    const deletedQuote = document.createElement('div');
    deletedQuote.innerHTML = `
      <h3>'Quote ${id} has been deleted.'</h3>
      <div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>
      <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
      `
      deletedQuoteContainer.appendChild(deletedQuote);
  });
});
