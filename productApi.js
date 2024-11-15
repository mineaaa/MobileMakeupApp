export default function FetchProducts(productType) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?product_type=${productType}`)
        .then(response => {
            if (!response.ok) throw new Error('Something went wrong: ' + response.statusText);
            return response.json();
        });
}