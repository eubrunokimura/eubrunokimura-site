import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync('cursos');

  const cursos = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`cursos/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    };

  }).sort((a, b) => {
    return +(a.frontmatter.order > b.frontmatter.order) || +(a.frontmatter.order === b.frontmatter.order) - 1;
  });


  return {
    props: {
      cursos,
    }
  }

};

export default function Home({ cursos }) {
  return (
    <>


      <div className='container mx-auto mb-10'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl'>Cursos</h1>
        </div>
        <div>
          <p>Aprenda a programar do zero com os cursos abaixo!</p>
        </div>
      </div>



      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {cursos.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>

    </>
  );
}