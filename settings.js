
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xwOHdYUHJ6TE1SMXNoK2hacmtpcWpCUEJWcXdSSm11cnhGQmU4WnYzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2E3YmcyYWRJRnBERitsc2g4RlhZRHRhaXlvYWwrdGEvbU8vTzlpbGV3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRTgvYWF5ZlJKc3kvaEZKaGJSR0JqTGt1enlidlpobkFXR0JCNVdMdzNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzNnpPaU51cWM4Wnp3Y2VOVWE4ZE5LcWFiQTdoZWYzQ3hiUmtDemFBVWdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJdmFSczl4UjA3b1Q0aGNTTG41ZFhYMWR4dG5OcjRSMEZ6TjZucTFzSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ZUWptSXhsTXNabVA5aGxWc1NoMjBmaXEzdHJmeW1Oc2dCZVRLNlRJVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05HWE9YM3F6eGEvelkzdUVyMEtrZDNpazNqUnRLRm53TEpJWGN0Tk1WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGsxSDhMY2RERnlKN1VrSHhCSE53R0U2bEU5OXh3L0NPSGFsWkc2TTJ6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowemUwb1RDMkFLU2pNUFBmM2RvRWxaSURBcndFa1dCMHBDVjBPWloxTU5DNzdRSkxWaU1va09qQ01TMW9qaUFnKzQydjJCWlhtMzhsd3hHK0FhbENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IlE0b1YyRXAraVFIRmhjbGIzOE1zTjJnYVJmTis3c1VKdm1teVlDK2hxWms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2Mjk3NjcwNTA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCNEM4NTkwQkFENzhFOUE1MzM2OUEwQUZFMzIxOTE4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNjI2Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5NzY3MDUwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRTQwNDY5NDE5NDFEMjVDOTlDN0UzNDRDQzhEQzFBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDYyNjc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMa19NRklYV1NfbXZETXBYc3hERXlRIiwicGhvbmVJZCI6ImFkM2EwY2E3LTU1YWUtNDg1Ny1hNzVmLTgwMzAyODVhZDg1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvd1lieFI2MXREWmtEK093TjM3UnR6M0F1NXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWhDSWd4SkJPaVhYdG5rQ01jenZlMFllWlZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiI5MTYyOTc2NzA1MDg6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNDI0MjQ1NTg5MjAyNTozQGxpZCIsIm5hbWUiOiLwn5iI8J2RqPCdkbLwnZGo8J2RuvCdka8g8J2RsvCdka/wnZGo8J2RteKYoO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2VQd3EwQkVNakhyY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZHgwYkxsN0RmNHA1OGF6RUlPU2RVay84KzdUT3NLeWdoMW1nTGhsSjN3MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL0hZcnR4cm1nVlpiOWp1dzJ2YnJGR3FkZERNZDhlYkNJQnh4NXhBc1U4RTQzNlhlNnFIeVVVd1Z0WGdmT0FIZFRiTS9INUMxc3A0Nk1SOFc1ZjJPREE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1wbjZiNkpvd0Ruby9jNm1ueFdBOUZtRllEcngrUmc5aGhKR25hQks1UVBzcU1XcHllU3BuV3lzKzNjWHB4dU5qYndidmJWMlhTU0Y4dnVBNUFtbUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2Mjk3NjcwNTA4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGNkR3k1ZXczK0tlZkdzeENEa25WSlAvUHUwenJDc29JZFpvQzRaU2Q4TiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDYyNjc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhGZyJ9",
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

          OWNER_NUMBER: process.env.OWNER_NUMBER || "916297670508",
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
