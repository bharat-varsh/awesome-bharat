export function formatCategoryName(category: string): string {
    if (!category) return '';

    const spaced = category
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

    return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
}
