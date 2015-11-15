# StudentMemeGenerator

The Student Meme Generator is a service by students for students for creating and sharing 
funny meme pictures.

## Setup instructions

You need to specify a postgresql database to be used by supplying a database url via 
`DATABASE_URL` environmental variable or by modifying the default url in `models/index.js`

The application is started with command: `npm start`

## Backend REST API

### Images

**List all images** `GET /api/images`  
**Returns** all images saved on the server as a list *Image* objects

**Get single image** `GET /api/images/<id>`  
**Returns** an image matching the requested `id` as an *Image* object

**Upload a new image** `POST /api/images`  
**Requires** the request to have `Content-Length` header set correctly 
to the size of the image and `Content-Type` header set to the type of the 
image file. The file to upload covers the whole body of the request.

**Returns** the newly saved image as *Image* object.

### Memes

**List all memes** `GET /api/memes`  
Returns all memes saved on the server as a list *Meme* objects

**Get single meme** `GET /api/memes/<id>`  
Returns a meme matching the requested `id` as an *Meme* object

**Create a new meme** `POST /api/memes`  
**Requires** the request to contain a *MemeRequest* object in the body of the request.

**Returns** the newly saved meme a *Meme* object.

### API objects

**Image**  

*Sample*

    {
        "id": "123",
        "url": "http://example.com/image.jpg"
    }

*Contents*  
`id` is the id of the image  
`url` is the full url to the image

**Meme**

*Sample*

    {
        "id": "123",
        "url": "http://example.com/meme.jpg",
        "imageId": "42",
        "topText": "one does not simply",
        "bottomText": "make a meme generator"
    }

*Contents*  
`id` is the id of the meme  
`url` is the full url to the meme
`imageId` is the id of the image used  
`topText` is the text written in the top half of the meme picture  
`bottomText` is the text written in the bottom half of the meme picture

**MemeRequest**

*Sample*

    {
        "imageId": "42",
        "topText": "one does not simply",
        "bottomText": "make a meme generator"
    }

*Contents*  
`imageId` is the id of the image wanted  
`topText` is the text to be written in the top half of the meme picture  
`bottomText` is the text to be written in the bottom half of the meme picture



