export interface Post{
    urlize: string
    title: string
    description: string
    date: string,
    markdown: string
}

export interface Frontmatter{
    layout: string,
    title: string,
    description: string,
    date: string
}