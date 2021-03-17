const ytsr = require('youtube-sr');
require('dotenv').config()
const yt = require('youtube-api')

const list = `
Wolfgang Lohr & Offbeat feat. Nina Zeitlin – Swing In Spring
Peggy Suave – Keep A-Knockin’
Swingrowers – Butterfly
Electro Velvet – Take Me Home (feat. Lone Sharx)
Gani Tamir – Night And Day
Bart&Baker feat. Antoine Villoutreix – Ami (AK Remix)
Intended Immigration – We’ve Got What You Want (Wolfgang Lohr Remix)
Annella – Kisse Misse
Balduin & Wolfgang Lohr – Whoopsy Daisy
Fedde Le Grand & Josh Cumbee – Dancing Shoes
Swingrowers – No Strings Attached
Jamie Berry feat. Octavia Rose – Light up the Night
Kitten And The Hip – No Strings
Minimatic – Joe’s Break
ProleteR – What Lana Says`


yt.authenticate({
  type: "oauth",
  token: process.env.key
  // memo : https://developers.google.com/oauthplayground/
});
for (video of list.trim().split('\n')) {
    ytsr.search(video)
      .then(videos => {
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
