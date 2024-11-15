
export default function FetchProducts({ productType, brand, productCategory, productTags }) {
    const parameter = new URLSearchParams();

    if (productType) parameter.append('product_type', productType);

    if (productCategory) parameter.append('product_category', productCategory);

    if (productTags) parameter.append('product_tags', productTags);

    if (brand) parameter.append('brand', brand);

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?${parameter.toString()}`)
        .then(response => {
            if (!response.ok) throw new Error('Something went wrong: ' + response.statusText);
            return response.json();
        });
}
