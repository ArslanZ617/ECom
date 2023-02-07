function importAll(r) {
    return r.keys().map(r);
}


export const proimages = importAll(require.context('../Images/img/products', false, /\.(png|jpe?g|svg)$/));
export const feaimages = importAll(require.context('../Images/img/features', false, /\.(png|jpe?g|svg)$/));
export const blogimages = importAll(require.context('../Images/img/blog', false, /\.(png|jpe?g|svg)$/));
export const payImgs = importAll(require.context('../Images/img/pay', false, /\.(png|jpe?g|svg)$/));
export const aboutImgs = importAll(require.context('../Images/img/about', false, /\.(png|jpe?g|svg)$/));
export const contactImgs = importAll(require.context('../Images/img/people', false, /\.(png|jpe?g|svg)$/));
