let cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dfxkbycx2', 
    api_key: '372857512981162', 
    api_secret: 'sr3Ak0ViqeqAMNKPrVwpcab4N98' 
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
