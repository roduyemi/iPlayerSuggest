const alexa = require('alexa-app');
var app = new alexa.app();
app.launch(function(request, response){
 response.say('Hello there, I am a bot created to help you find something to watch on iPlayer.');
 response.shouldEndSession(false);
})
app.intent('GetiPlayerSuggestions',
 {
  'slots': {},
  'utterances': [
   "what should {I|we} watch",
   "what is the best {tv show|movie} on iPlayer",
   "what's on iPlayer",
   "what should {I|we} watch on iPlayer"
  ]
 },
 (request, response) => {
  generate_suggestions(response);
  return; 
 }
);
const generate_suggestions = (response) => {
 const shows = [
   'Click',
   'Mock The Week',
   'Life',
   'Poldark',
   'EastEnders',
   'Radio 1 in Ibiza',
   'Panorama'
 ];
const rand = shows[Math.floor(Math.random() * shows.length)];
response.say('How about watching ' + rand + ' today?');
 response.send();
return ;
}
// Connect to lambda
exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema'))
{
    console.log (app.schema ());
    console.log (app.utterances ());
}