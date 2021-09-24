import * as fs from 'fs';
import { Frontmatter, Post } from './src/types';

const writePostsAndPagesDataToJSON = () =>{
    let postList: Post[] = [];

    let files = fs.readdirSync('./posts');
    files = files.filter(file => file.endsWith('.md'));

    files.forEach(file =>{
        const content = fs.readFileSync(`./posts/${file}`, {encoding: 'utf8'});

        /*
        front matter will be assumed to have the following format
            ---
            layout: blog
            title: Article number 1
            description: Article test
            date: 2021-09-23T20:33:29.527Z
            ---
        */
        const frontmatterEl = content.split('---', 2).join('').trim().split('\n');
        let frontmatter: Frontmatter = {
            title: '',
            description: '',
            layout: '',
            date: ''
        }

        frontmatterEl.forEach(entry =>{
            const idx = entry.indexOf(':');
            const key = entry.slice(0, idx); //only slice at first colon - other colons are present in date, thus split cannot be used
            const val = entry.slice(idx+1);
                frontmatter[key] = val.trim();
        });

        const markdownBegin = content.indexOf('---', content.indexOf('---') + 1) + 3;
        const markdown = content.slice(markdownBegin).trim();

        const post: Post = {
            title: frontmatter.title,
            urlize: frontmatter.title.toLowerCase().trim().replace(/\s/g, '-'),
            description: frontmatter.description,
            date: frontmatter.date.toString(),
            markdown: markdown
        }
        

        postList.push(post);
    });
    
    fs.writeFileSync('./src/posts.json', JSON.stringify(postList));
}

writePostsAndPagesDataToJSON();