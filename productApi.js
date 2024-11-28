export function fetchProducts(productType) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?product_type=${productType}`)
        .then(response => {
            if (!response.ok) throw new Error('Something went wrong: ' + response.statusText);
            return response.json();
        });
}

export function fetchTags(productTag) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?product_tags=${productTag}`)
        .then(response => {
            if (!response.ok) throw new Error('Something went wrong: ' + response.statusText);
            return response.json();
        });
}

export function fetchBrands(brand) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?brand=${brand}`)
        .then(response => {
            if (!response.ok) throw new Error('Something went wrong: ' + response.statusText);
            return response.json();
        });
}