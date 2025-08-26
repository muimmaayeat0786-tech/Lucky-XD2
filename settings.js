
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NHZ3BpOWZWdlZNbnNCS0QwL1FWbmF6TktoZzF1dXRxWTFKMWtoQVBGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZCs1LzYrVTJwR01hcGdlTTltd3lia2xPVkUzVkRwZHZMNmttTmJnQStrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUG9SVW8waVZzaXRWRXVsSzZ3TUE5MVhmV0hORGVZWHRkcUJ5NFdreUZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIczhBOS8rdk1GWENKc2hBdDFXUjhKdi9tdlpuMTEwY2pRNFRUZ0NhWnp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCYjJQRHdqSWR6SDMyM1NLNFhKVkxjeE9qRTlYNUpodnNadFU2eThLRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl3cDlXY0dWcHhOV3NzazhtOHE4enlWVVAvV2RHWjd3K1RjMFgvQWpBVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01uZGFGaUxNcUhYNW02OHlzMmtmeUpRaHRiMWFEK2FTK0hmL1EvcUptdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnRyNDVBcVpWaDBvWWtzcFFaclluNmJUWmVZVmVkTVlkU0V1c3Q4aFpYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZZMHhuWjlsSlBMcjRJQ2J5VWlJMU9qWHFQZEVaZDlNRGNWVTBlZ2NIRmtrOU9wdnpVWmFEM25iTkpyeDNIMllMTnBEemRvVVpsRUFxNHJnOGcxMmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6ImNtcEVYRWVjc2dKTlRqL0g1OWQ1VjI4eXRCTjJBUEFIOEVLT1dLYkM0RWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTM2NzEyMDg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVBMUJCNEU3MzA1Q0VGRDM1Mzc2RDBDN0ZEOUIwRkE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYyMzMzNzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTEzNjcxMjA4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQzZBMDZFNDRFNEIyMkNBRkY4RDUwNjhCNDQ2REEwQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MjMzMzcwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLeEU4X2lMcVJJZTZ0SEFnbXFJaFlnIiwicGhvbmVJZCI6IjlhYmY2Yzg4LWUxZDktNGQ1ZC04OGRjLTAyOTFkYWE1YzE4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UGIxWkhKQlRjUVlPYmZJSllCOEVWUVV6RGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzg3WkV6Y0cxa0ZuemU2UXJERGhaY2kxSFBVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiI5ODkxMzY3MTIwODg6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2NTMwMDc2NzQxNjUzMDozQGxpZCIsIm5hbWUiOiJBS0FTSCBLSEFOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbXN3YWNERUl6OXQ4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwQ01MSjRWZmYwVXcvR0FZQS8wdkkzQ2lLeGVRN1FNS0xVYWxyd2YrV1FBPSIsImFjY291bnRTaWduYXR1cmUiOiIzWWQ0RWovVlo5Y1h1dXczYkxGbUpOOXBncXBZODBsdmFNZ3FTeXJwUzhQWHU1UlVkcGEvOENLQURFK1Q1NmJUUVg0MnBDcWdTSG04UGFSSkRCbk9Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVURhTEVtRCtIQXRaazltbHpwMDRtVnRMbk5pZnQxUDhhVkY3U005UnNqRS9wVjhCbDl1STA0RGR4ZlpYVVdNdlBYWlF3ZEFVM2RpSVdKY0tXc3VYakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5ODkxMzY3MTIwODg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhUWpDeWVGWDM5Rk1QeGdHQVA5THlOd29pc1hrTzBEQ2kxR3BhOEgvbGtBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYyMzMzNjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ24rIn0=",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "989136712088",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "AKASH KHAN",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
