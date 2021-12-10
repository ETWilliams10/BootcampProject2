let cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

module.exports = {
    upload: (public_id) => {
        return cloudinary.v2.uploader.upload(
            "https://avatars.githubusercontent.com/u/32621882?v=4",
            { public_id: public_id }, 
            function(error, result) {
                console.log(result); 
        });
    },
    
    fetchGallery: () => {
        return cloudinary.v2.search
            .expression('folder=canvas_project_2')
            .execute();
    }
}
