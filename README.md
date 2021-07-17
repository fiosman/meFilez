# meFilez

File storage service with CRUD functionality.

Development by Fares Osman and Jeannie Wang utilizing an agile workflow. I wanted to play around with MERN stack technology and found this application to be a suitable learning experience. This project is not meant to clone any applications and is primiarly for educational purposes to demonstrated knowledge in the MERN stack technology.

NOTE: It's likely the app might break when uploading files at one point, due to the fact that the S3 bucket is hosted on a free AWS account in which case access will be revoked. 

## Live Link

You can visit the application [here](http://mefilez.herokuapp.com/)

## Main Features

- Full authentication system based on JWT. Authroization using passport with custom middleware rolled out.
- Users are able to create folders, and upload files to them. Files are hosted on AWS S3.
- Users can edit, delete and read content. Users are able to directly view images however any other files (e.g. PDFs) are downloaded locally.
- Users are able to search files and folders by keywords.

## Technologies Used

### Backend

- MongoDB
- Mongoose
- Express
- Node

### Frontend

- Redux
- React
- HTML
- CSS

## Future Work

- Ability to share files with non-registered users.
- Set up user groups for file access.
