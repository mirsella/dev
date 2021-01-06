const fs = require('fs');
const ytdl = require('ytdl-core');
const ytsr = require('youtube-sr');
// memos : next time just use youtube-dl 'ytsearch:youtube name'

const list = `
Shape of Lies (Thomas-Adam Habuda)
Revolution (Piotr Musial)
Reach (Axl Rosenberg feat. Merethe Soltvedt)
Redemption (Axl Rosenberg)
The Last Funeral (Nitish Raina)
Born from Ashes (Axl Rosenberg)
Afterlight (Piotr Musial)
Dawn of Faith (Thomas-Adam Habuda)
Theory of Light (Thomas-Adam Habuda)
Hidden Machinations (Cyrus Reynolds)
Dirt and Fire (Piotr Musial)
Forgotten Odes (Bianca Ban)
Cloak and Dagger (Bianca Ban)
Autumn Moon (Neal Acree)
True Love's Last Kiss (Thomas-Adam Habuda)
Yearning Hearts (Bianca Ban)
Providence (Bianca Ban)
Fate of the Clockmaker (Flynn Hase Spence)
The Ritual (Cyrus Reynolds)
The Game is Afoot (Neal Acree)
`
fs.mkdir('audios')
for (video of list.trim().split('\n')) {
  ytsr.search(video)
    .then(videos => {
      console.log(videos[0].title)
      // .pipe(fs.createWriteStream(videos[0].title));
      ytdl(videos[0].id, {
        format: 'mp3',
        filter: 'audioonly',
      }).pipe(fs.createWriteStream('audios/'+videos[0].title.replace('/', ' ', 'g')+'.mp3'));
    })
}
