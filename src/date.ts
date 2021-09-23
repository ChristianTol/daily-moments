export function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString('de-EU', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}