var quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
]

$(document).ready(function() {
   var num = Math.floor(Math.random() * 5) + 1;  
    $("#new").click(function(){
       $(".quote").text(quotes[num].quote);
   $(".author").text(quotes[num].author);
    }); 
 $('#tweet').click(function() {
     var url = 'https://twitter.com/intent/tweet?hashtags= FreeCodeCamp&text=';
   var quoten = quotes[num].quote;
   var auth = quotes[num].author
   tweet(url, quoten, auth);
 });
});

function tweet(url, quoten, auth) {
window.open(url   + encodeURIComponent(quoten) + " - " + auth)
};