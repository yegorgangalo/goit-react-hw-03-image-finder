import React from 'react';

function ImageGalleryList ({imgArray}) {
    return (
        <ul className="ImageGallery">
                {imgArray.map(({ id, webformatURL, largeImageURL, tags }) => {
                    return <li className="ImageGalleryItem" key={id}>
                        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" data-full-size={largeImageURL}/>
                </li>
                })}
        </ul>
    )
}

export default ImageGalleryList;