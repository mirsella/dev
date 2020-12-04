const ytsr = require('youtube-sr');
require('dotenv').config()
const yt = require('youtube-api')

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
The Game is Afoot (Neal Acree)`


yt.authenticate({
  type: "oauth",
  token: process.env.key
  // memo : https://developers.google.com/oauthplayground/
});
for (video of list.trim().split('\n')) {
  ytsr.search(video)
    .then(videos => {
      console.log(videos[0].title)
      yt.playlistItems.insert({
        part: 'id,snippet',
        resource: {
          snippet: {
            playlistId:"PLnYA0n5BTNscRlnFBkNGJrCyKdOqGtID9",
            resourceId:{
              videoId:videos[0].id,
              kind:"youtube#video"
            }
          }
        }
      }, function (err, data) {
        console.log(err, data);
      });
    })
}
