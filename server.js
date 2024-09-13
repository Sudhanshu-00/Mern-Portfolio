import app from "./app.js"
import cloudinary from "cloudinary"


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARI_API_NAME,
    api_key: process.env.CLOUDINARI_API_KEY,
    api_secret: process.env.CLOUDINARI_API_SECRET

})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});