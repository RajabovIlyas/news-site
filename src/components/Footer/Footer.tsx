const Footer = () => {

    return (
        <div className="max-w-screen-xl mx-auto sticky top-[100vh] ">
            <footer className="p-5">
                <p className="text-center text-sm text-slate-500 dark:text-zinc-400">
                    Copyright © {new Date().getFullYear()} News.
                </p>
                <p className="text-center text-xs text-slate-500 mt-1 dark:text-zinc-400">
                    Made by &nbsp;
                    <a
                    className="hover:underline hover:cursor-pointer">
                     Raj Ilyas
                </a>
                </p>
            </footer>
        </div>
    )
}

export default Footer;
