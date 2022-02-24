export const upperCaseToCapitalized = (text) => {
    const words = text.split('_').map( word => {
        const decapitalized = String(word).toLowerCase();
        return decapitalized.charAt(0).toUpperCase() + decapitalized.slice(1);
    })
    return words.join(' ');
}