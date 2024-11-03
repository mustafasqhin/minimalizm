// app.js
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Ana Sayfa
app.get("/", (req, res) => {
    res.render("index", {
        adsenseClientId: process.env.ADSENSE_CLIENT_ID,
        adsenseSlotId: process.env.ADSENSE_SLOT_ID,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
