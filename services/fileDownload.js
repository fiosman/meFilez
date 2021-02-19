// require("dotenv").config();
// const aws = require("aws-sdk");

// aws.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
//   });
  
// const s3 = new aws.S3();


// download = (req, res) => {
//   const params = {
//     Key: req.params.filename
//   }

//    s3.getObject(params)
// 		.createReadStream()
// 			.on('error', (err) => {
// 				res.status(500).json({error: err});
// 		}).pipe(res);

// }


// module.exports = download;