const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dozrsr2qs",
    api_key: "943791249769858",
    api_secret: "9RZANh07DvMw_rlqebz1M11a0b4",
});


const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };