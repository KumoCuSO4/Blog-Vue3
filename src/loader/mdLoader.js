module.exports = source => {
    const str = JSON.stringify(source)
    return `export default ${str}`
}