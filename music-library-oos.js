// LIBRARY
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// Add PLAYLIST to LIBRARY
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

// PLAYLIST
function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function () {
    let sum = 0;
    this.tracks.forEach((track) => {
      sum += track.rating;
    });
    return sum / this.tracks.length;
  };
  this.totalDuration = function() {
    let sum = 0;
    this.tracks.forEach((track) => {
      sum += track.duration;
    });
    return Math.floor(sum / 60) + ' minutes';
  };
}

// Add TRACK to PLAYLIST
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

// TRACK
function Track(title, rating, duration) {
  this.title = title;
  this.rating = rating;
  this.duration = duration;
}

let library1 = new Library('myLibrary', 'nickLee');
let playlist1 = new Playlist('bangers');
let track1 = new Track('Chanel', 5, 240);
let track2 = new Track('Super Rich Kids', 4, 180);
let track3 = new Track('Pyramids', 5, 320);

library1.addPlaylist(playlist1);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);

console.log(playlist1.totalDuration());
console.log(library1);
console.log(playlist1);
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