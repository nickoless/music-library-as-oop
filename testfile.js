function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}





// console.log(library1.name, library1.creator, library1.playlists);
let library1 = new Library('myLibrary', 'nickLee');
let playlist1 = new Playlist('bangers');
let track1 = new Track('Chanel', 5, '4 minutes');

// console.log(Library.prototype);
// console.log(library1.playlists)
library1.printPlaylist(playlist1);
console.log(library1)



/** TODO:
 * 
 * Library has NAME and CREATOR
 * Library has many PLAYLISTS (empty ARRAY)
 *  Each Playlist has a name
 *  Each Playlist has many tracks
 *  Each Playlist has an OVERALL RATING FUNCTION
 *  Each Playlist had TOTAL DURATION 
 * A TRACK has a TITLE and RATING (1 to 5) and a LENGTH
 * 
**/