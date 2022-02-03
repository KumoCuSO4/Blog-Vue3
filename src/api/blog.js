/**
 *
 * @returns [{name, title, content}]
 */
export function getBlogList() {
    const modulesFiles =  require.context('@/blogs', true,  /\.md$/);
    var blogList = []
    modulesFiles.keys().forEach((module_item) => {
        var info_end = modulesFiles(module_item).default.lastIndexOf("---");
        var infos = modulesFiles(module_item).default.substring(0, info_end).split("\n");
        var content = modulesFiles(module_item).default.substring(info_end + 3)
        var title = "";
        for (var i in infos) {
            var info = infos[i];
            var pos = info.indexOf(':');
            var type = info.substring(0, pos);

            var str = info.substring(pos + 1);
            if (type === "title") {
                title = str;
            }
        }
        blogList.push({"name": module_item.substring(2), "title": title, "content": content});
    });
    return blogList;
}

/**
 *
 * @param name string
 * @returns {title, content}
 */
export function getBlog(name) {
    var blogFile =  require('@/blogs/'+name);

    var info_end = blogFile.default.lastIndexOf("---");
    var infos = blogFile.default.substring(0, info_end).split("\n");
    var content = blogFile.default.substring(info_end + 3)
    var title = "";
    for (var i in infos) {
        var info = infos[i];
        var pos = info.indexOf(':');
        var type = info.substring(0, pos);

        var str = info.substring(pos + 1);
        if (type === "title") {
            title = str;
        }
    }
    return {"title":title,"content":content};
}