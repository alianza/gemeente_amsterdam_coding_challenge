export const getFormattedDate = (date: Date) => {
    return date.toLocaleString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });
}
