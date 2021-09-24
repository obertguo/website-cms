"use strict";
exports.__esModule = true;
var fs = require("fs");
var writePostsAndPagesDataToJSON = function () {
    var postList = [];
    var files = fs.readdirSync('./posts');
    files = files.filter(function (file) { return file.endsWith('.md'); });
    files.forEach(function (file) {
        var content = fs.readFileSync("./posts/" + file, { encoding: 'utf8' });
        /*
        front matter will be assumed to have the following format
            ---
            layout: blog
            title: Article number 1
            description: Article test
            date: 2021-09-23T20:33:29.527Z
            ---
        */
        var frontmatterEl = content.split('---', 2).join('').trim().split('\n');
        var frontmatter = {
            title: '',
            description: '',
            layout: '',
            date: ''
        };
        frontmatterEl.forEach(function (entry) {
            var idx = entry.indexOf(':');
            var key = entry.slice(0, idx); //only slice at first colon - other colons are present in date, thus split cannot be used
            var val = entry.slice(idx + 1);
            frontmatter[key] = val.trim();
        });
        var markdownBegin = content.indexOf('---', content.indexOf('---') + 1) + 3;
        var markdown = content.slice(markdownBegin).trim();
        var post = {
            title: frontmatter.title,
            urlize: frontmatter.title.toLowerCase().trim().replace(/\s/g, '-'),
            description: frontmatter.description,
            date: frontmatter.date.toString(),
            markdown: markdown
        };
        postList.push(post);
    });
    fs.writeFileSync('./src/posts.json', JSON.stringify(postList));
};
writePostsAndPagesDataToJSON();
