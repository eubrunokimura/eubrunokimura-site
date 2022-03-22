import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import getAulas from '../../../utils/get-aulas';

export async function getStaticPaths() {

    const paths = getAulas('aulas')
    console.log(paths)

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug, aula } }) {
    const fileName = fs.readFileSync(`aulas/${slug}/${aula}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function PostPage({ frontmatter, content }) {
    return (
        <div className='prose mx-auto'>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    );
}