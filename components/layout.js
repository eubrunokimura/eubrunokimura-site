import Link from 'next/link';


const Layout = ({ children }) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"></link>
            <div className='flex flex-col min-h-screen'>
                <header className='bg-black mb-8 py-4 text-white'>
                    <div className='container mx-auto flex justify-center'>
                        <Link href='/'>
                            <a className='font-bold text-2xl'>@eubrunokimura</a>
                        </Link>
                        {/* <span className='mx-auto'>Welcome to my Blog</span> */}
                    </div>



                </header>
                <main className='container mx-auto flex-1 '>
                    {children}
                </main>
                <footer className='bg-black mt-8 py-4 text-white'>
                    <div className='container mx-auto flex justify-center text-2xl'>
                        {/* &copy; 2022 eubrunokimura */}
                        <div className="">
                            <a href="https://www.linkedin.com/in/kimurabruno" className="w-6 mx-1">
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCHGYJa20B0sV7HCElzfyKIA?sub_confirmation=1" className="w-6 mx-1">
                                <i className="uil uil-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kimurabruno" className="w-6 mx-1">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/eubrunokimura/" className="w-6 mx-1">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}

export default Layout