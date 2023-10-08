export function truncateWords(str: string, count: number) {
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ")
}
