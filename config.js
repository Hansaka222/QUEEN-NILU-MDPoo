/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;N3QzEKzA#qh5d7V8CCMLkyv0ZYfD4EeqcQNrFUhyD_mV_Y5YAhz8' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://rush_gm51_user:PknpJpfpN4tE6ZHdXHODVmgn117u73G8@dpg-ck43kej6fquc73a1e120-a.frankfurt-postgres.render.com/rush_gm51'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94766037244'

global.OWNER_NAME = '𖥻៹𝑃𝓸𝓸🌻✨'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𖥻៹𝑃𝓸𝓸🌻✨'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@𖥻៹𝑃𝓸𝓸🌻✨' //sticker

global.FOOTER = '•アₒₒ💕🐝•2023 '

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '•アₒₒ💕🐝• © 2023' // Caption

global.ALIVELOGO = 'https://i.ibb.co/mFbNBkm/Polish-20211029-183617629.png' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'false' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://i.ibb.co/mFbNBkm/Polish-20211029-183617629.png' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: •アₒₒ💕🐝•2023" //ur yt chanel name
global.socialm = "GitHub: •アₒₒ💕🐝•2023" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

