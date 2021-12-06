let cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dfxkbycx2', 
    api_key: '372857512981162', 
    api_secret: 'sr3Ak0ViqeqAMNKPrVwpcab4N98' 
  });

module.exports = {
    upload: (filepath) => {
        // cloudinary.v2.uploader.upload(
        //     "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
        //     { public_id: "olympic_flag" }, 
        //     function(error, result) {console.log(result); 
        // });
        console.log('cloudinaryuploadcalled')
    } 
}
