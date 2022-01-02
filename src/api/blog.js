var blogList = []
var dirty = true

export function getBlog(name) {
    if(dirty) {
        blogList = getBlogListFromFiles()
        dirty = false
    }
    return blogList.find(function (item) {
        return item.name === name
    })
}

export function getBlogList() {
    if(dirty) {
        blogList = getBlogListFromFiles()
        dirty = false
    }
    return blogList
}

export function getBlogListFromFiles() {
    /*
    //const publicPath = `${process.env.BASE_URL}blogs`
    //const localPath = '@/assets/blogs'
    //const ctx = require.context('@/assets/blogs', false, /\.md$/)

    const ctx = require.context('@/../public/blogs', false, /\.md$/)
    const data = []
    for (const key of ctx.keys()) {
        const str = ctx(key).default
        const strL = str.split("---",3)
        const _infos = strL[1].split("\n")

        const _name = key.replace("./","")
        const _content = strL[2]
        var _title = ""
        var _date = ""
        for(const i in _infos) {
            if(_infos[i].startsWith("title:")) {
                _title = _infos[i].substring(6)
            }
            else if(_infos[i].startsWith("date:")) {
                _date = _infos[i].substring(5)
            }
        }
        data.push({
            name: _name,
            title: _title,
            date: _date,
            content: _content
        })
    }

    //console.log(data)
    return data
*/
    /*
    const path = require("path")
    const fs = require("fs")
    //const publicPath = `${process.env.BASE_URL}blogs`
    const publicPath = '@/../public/blogs'
    fs.readdir(publicPath,function (err,files) {
        var dirs = [];
        (function iterator(i) {
            if(i==files.length) {
                console.log(dirs)
                return
            }
            fs.stat(path.join(publicPath,files[i]),function (err,data) {
                if(data.isFile()) {
                    dirs.push(files[i])
                }
                iterator(i+1)
            })
        })(0)
    })
     */
    const publicPath = `${process.env.BASE_URL}blogs`
    const files = new File()
    const fr = new FileReader()
    fr.readAsText()
}