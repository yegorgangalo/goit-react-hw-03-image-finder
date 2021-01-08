import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem'

function ImageGalleryList ({imgArray}) {
    return (
        <ul className="ImageGallery">
            {imgArray.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                    <li className="ImageGalleryItem" key={id}>
                        <ImageGalleryItem src={webformatURL} alt={tags} fullSize={largeImageURL} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ImageGalleryList;