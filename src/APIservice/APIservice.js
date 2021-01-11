const staticFetchOptions = {
    perPage: 12,
    staticURL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
    keyAPI: '19532775-cd1fec64673db4c80a00103d2',
}

const { staticURL, perPage, keyAPI } = staticFetchOptions;

export function imageAPI (query, page) {
    const url = `${staticURL}&q=${query}&page=${page}&per_page=${perPage}&key=${keyAPI}`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error(`There is no image with tag ${query}`));
            }
            return res.json();
        })
}