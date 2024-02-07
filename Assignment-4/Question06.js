/**
Q6. You are developing a music playlist management system. Implement functions that leverage closures and higher-order functions to perform common playlist operations.  

Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This closure should allow adding and listing songs for the given playlist.  

Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the specified playlist. Use the closure created in TASK 1.  

Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the Task 1  
**/

// Solution for Q - 6

// Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This closure should allow adding and listing songs for the given playlist.
function createPlaylist(playlistName) {
	let playlist = [];

	return {
		addSong: function (songName, artist) {
			playlist.push({ songName, artist });
		},
		listSongs: function () {
			if (playlist.length === 0) {
				console.log(`${playlistName} Playlist is empty!`);
			} else {
				console.log(`${playlistName} Playlist: ${playlist
					.map((song) => {
						return `${song.songName} by ${song.artist}`;
					})
					.join(', ')}
                `);
			}
		},
	};
}

// Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the specified playlist. Use the closure created in TASK 1.
function addSong(playlist, songName, artist) {
	playlist.addSong(songName, artist);
}

// Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the Task 1
function listSongs(playlist) {
	playlist.listSongs();
}

const myPlaylist = createPlaylist('My Favorites');

addSong(myPlaylist, 'Song1', 'Artist1');
addSong(myPlaylist, 'Song2', 'Artist2');
addSong(myPlaylist, 'Song3', 'Artist3');

listSongs(myPlaylist);
