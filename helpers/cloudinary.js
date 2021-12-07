let cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dfxkbycx2', 
    api_key: '372857512981162', 
    api_secret: 'sr3Ak0ViqeqAMNKPrVwpcab4N98' 
  });

module.exports = {
    upload: (public_id) => {
        return cloudinary.uploader.upload(
            "https://avatars.githubusercontent.com/u/32621882?v=4",
            { public_id: public_id }, 
            function(error, result) {
                console.log(result); 
        });
    } 
}
