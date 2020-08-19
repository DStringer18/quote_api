const express = require('express');
const app = express();
const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

//get random quote
app.get('/api/quotes/random', (req, res) => {
  res.send({
    quote: getRandomElement(quotes)
  })
});


//get all quotes or person's quotes
app.get('/api/quotes', (req, res) => {
  if (req.query.person !== undefined) {
   const personQuotes = quotes.filter(quote => quote.person === req.query.person);
   res.send({ quotes: personQuotes }) 
  } else {
    res.send({
      quotes: quotes
    });
  }
});

//post a new quote
app.post('/api/quotes', (req, res) => {
  const receivedQuote = req.query.quote;
  const receivedPerson = req.query.person;
  const submission = {
    id: quotes.length+1,
    quote: receivedQuote,
    person: receivedPerson
  }
  if (receivedQuote && receivedPerson) {
    quotes.push(submission);
    res.send({ quote: submission });
  } else {
    res.status(400).send();
  }
})

//delete a quote
app.delete('/api/quotes/:id', (req, res) => {
  console.log(req.params.id)
  const quote = quotes.find(quote => quote.id === req.params.id);
  if (quote) {
    const index = quotes.indexOf(quote);
    quotes.splice(index, 1);
    res.send( { quote: quotes[index] });
  } else {
    res.status(404).send( 'There is no quote with that ID.');
  }
})