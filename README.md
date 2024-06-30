# MagicArt
Magic the Gathering card/art search engine

***
Overview  
I am planning on making a search engine for the 29000~ unique Magic Cards that mostly focuses on showcasing the art and artists of this 30 year old game. Searching for a card name specifically or searching for specific attributes pertaining to a card itself ie color, cost, set. Searching for an Artist will bring up a gallery of all associated art they've produced for the game. Searching for a card will let you click on the artist of that card to see what else they've done without having to have known the artist beforehand. There will be an advanced search feature to narrow down your search if you aren't sure of the name of a card or artist, but know some other attributes that a card has, like what type or color. 

***
Technical Insight  
I will be using React to develop this website, using setState for the components to know if something has been searched or if the search bar is blanked to show the right page dimensions/supplementary containers (random cards, similar artists. etc). There is a JSON array containing every card name, and some basic attributes, so I can add an autocomplete/suggest feature to quickly fill in what you might be typing, or to give you some guidance on what there is to search for in the first place. After a search, card data/description/art will be pulled from an API of every unique card printing.  
  
The API and JSON array are in this SDK https://github.com/MagicTheGathering/mtg-sdk-javascript

***
Obviously this is a rough draft and the overall design/functionality is subject to change, but I think this might be pretty manageable by the end. I would love to get into it and see what features I can add, and what fat I can cut.
