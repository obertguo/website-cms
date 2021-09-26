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

export interface Home{
    social_media: 
        Array<{
            url: string,
            icon: string
        }>
    
    sections: 
        Array<{
            title: string,
            desc: string,
            list: string[] | null,
            links: 
                Array<{
                    name: string,
                    url: string
                }> | null
        }>
}