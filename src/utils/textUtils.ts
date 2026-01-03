export function formatCategoryName(category: string): string {
    if (!category) return '';

    const withSpaces = category.replace(/(A-Z)/g, ' $1');

    const titleCase = withSpaces
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .trim();

    return titleCase;
}
