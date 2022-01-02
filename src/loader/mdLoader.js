//const marked = require('marked');

module.exports = source => {
    //const html = marked(source)
    const str = JSON.stringify(source)
    //console.log(str)
    return `export default ${str}`
}