import app from "./app.js"
import cloudinary from "cloudinary"


cloudinary.v2.config({
    cloud_name: "",
    api_key: "",
    api_secret: ""

})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});