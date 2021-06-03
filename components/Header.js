import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>GeekPicker</span> News
            </h1>
            <p className={headerStyle.description}>Keep up to date with the latest programming news</p>

            {/* <style jsx>
                {`
                    .title {
                        color: red
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header