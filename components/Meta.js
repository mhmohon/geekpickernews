import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width'/>
            <meta charset="utf-8"/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <title>{title}</title>
        </Head>
    )
}

export default Meta
