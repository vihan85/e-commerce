import Footer from "./layout-cpn/footer"
import MainHeader from "./layout-cpn/main-header"


function MainLayout({children}) {
    return (
        <div>
            <MainHeader/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    )
}
export default MainLayout