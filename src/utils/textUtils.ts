export function formatCategoryName(category: string): string {
    if (!category) return '';

    const spaced = category
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

    const splitWords = spaced.split(' ');

    return splitWords
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
