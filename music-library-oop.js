var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

    uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  printPlaylists: function () {
    for (var key in this.playlists) { 
      var playlist = this.playlists[key]; 
      console.log(playlist.id + ': ' + playlist.name + ' - ' + playlist.tracks.length + " tracks")
    }
  },

  printTracks: function () {
    for (var key in this.tracks) {
      var tracks = this.tracks[key];
      console.log(tracks.id + ": " + tracks.name + " by" + tracks.artist + " (" + tracks.album + ")");
    }
  },

  printPlaylist: function (playlistId) {
    var listOfTracks = this.playlists[playlistId].tracks;
    var playlistName = this.playlists[playlistId].name;
    console.log(playlistId + ": " + playlistName + "- " + listOfTracks.length + " tracks");
    for( var i = 0; i< listOfTracks.length; i++) {
      var currentTrack = listOfTracks[i];
      console.log(currentTrack + ": " + this.tracks[currentTrack].name + " by " + this.tracks[currentTrack].artist + " (" + this.tracks[currentTrack].album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var playlist = this.playlists[playlistId].tracks;
    playlist.push(trackId)
    console.log(playlist);
  },

  addTrack: function (name, artist, album) {
    var newTrack = {
      id: this.uid(),
      name: name,
      artist: artist,
      album: album
    };
    this.tracks.t04 = newTrack;
    console.log(this.tracks)
  },

  addPlaylist: function (name) {
    var newPlaylist = {
      id: this.uid(),
      name: name,
      tracks: []
    };
    this.playlists.p03 = newPlaylist;
    console.log(this.playlists);
  }
};


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist('p01');

// adds an existing track to an existing playlist

library.addTrackToPlaylist('t03', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

library.addTrack('Pyramids', 'Frank Ocean', 'Channel Orange');

// adds a playlist to the library

library.addPlaylist('New Playlist');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}