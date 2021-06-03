import {server} from '../../../config'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Meta from '../../../components/Meta'

const article = ({ articleRes }) => {
    const router = useRouter()
    const {id} = router.query

    return (
        <>
            <Meta title={articleRes.title}/>
            <h1>{articleRes.title}</h1>
            <p>{articleRes.excerpt}</p>
            <br />

            <Link href='/'>Go to home</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const articleRes = await res.json()
    return {
        props: {
            articleRes,
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const articleRes = await res.json()
//     return {
//         props: {
//             articleRes,
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false,
//     }
// }

export default article