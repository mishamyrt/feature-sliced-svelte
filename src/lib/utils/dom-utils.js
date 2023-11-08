export function countByLayers () {
    const items = document.querySelectorAll('[data-fsd]')
    const results = {}
    for (const item of items) {
        const layer = item.getAttribute('data-fsd-layer')
        if (layer in results) {
            results[layer]++
        } else {
            results[layer] = 1
        }
    }
    return Object
        .entries(results)
        .map(([name, count]) => ({ name, count }))
}