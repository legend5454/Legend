const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13152175681";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "HtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmcno1LW9reVRmcXhzd2dNSWphN01nXCIsXG4gIFwicGhvbmVJZFwiOiBcImYxMjU5M2E1LTc5YzMtNGQxYy05NmY3LWRjOTQzMmVhODA3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMzIsXG4gICAgICA5MCxcbiAgICAgIDg0LFxuICAgICAgMjEzLFxuICAgICAgMTUsXG4gICAgICAyMzYsXG4gICAgICAyMDIsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDE2MyxcbiAgICAgIDMxLFxuICAgICAgMTUxLFxuICAgICAgMTM2LFxuICAgICAgNjcsXG4gICAgICA0MyxcbiAgICAgIDcyLFxuICAgICAgMTQwLFxuICAgICAgMTEsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICA5OSxcbiAgICAgIDcsXG4gICAgICA2MyxcbiAgICAgIDI0MCxcbiAgICAgIDI0MixcbiAgICAgIDIxNyxcbiAgICAgIDExMCxcbiAgICAgIDc2LFxuICAgICAgMSxcbiAgICAgIDExMixcbiAgICAgIDgzLFxuICAgICAgMjA4LFxuICAgICAgMjUzLFxuICAgICAgNjQsXG4gICAgICAyNDAsXG4gICAgICA0OSxcbiAgICAgIDUsXG4gICAgICAxMTUsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFBOUkVMNkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjEzMTUyMTc1NjgxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc4MjUwNDc4OTY5MDQ2OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZvPCdmoEg8J2Zu/CdmbTwnZm28J2ZtPCdmb3wnZmzIPCfmqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ2dxK2tERU1MYXBiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxZdCtQZ1dncWw4RjlvTUV0b0N1TWg4N2ZzeE11ckkwNG1mdVNUdXFMam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRG9JYzdSbTVTMWd5amE4V2Njc0RQNDhCNGhaU0ZYOCtnckR1R3pmS3BEVkNBeHFURWRiNEZFWVdZQkVqQmNGTWNyUjFtaXNncWlqZlcwbWlDd0lrQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU21oUW10ZXF6dDlNN2VicFNTdGMraTUzdWVNaE1NUFArb1IzSTgvU3dlVkJ3NC9SMTRhZW15R2tIcjg0Wnc2VWVsbUFsODUyN2o2MGJPWXhybWJyZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTMxNTIxNzU2ODE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxODUyODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQQTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBBMS5qc29uIjogIntcImtleURhdGFcIjpcIlpFMGZCSC9LdVlaZzNPZlZsb3V3Um44Lytud25LV212SThrNHJ3eVNQOHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNjIxNTk1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MTg1Mjg4NDQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
