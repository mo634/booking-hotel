import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

interface Props {
    children: React.ReactNode
}
const Layout = ({children}: Props) => {
    return (
        <div
        className=" bg-[#eee] min-h-screen flex flex-col"
        >
            
            <Header/>
            <Hero/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout