import Layout from '../containers/Layout'
import Header from "../components/Header";
import SingOut from "../components/singOut";
import Footer from "../components/Footer";

function App(){
    return(
        <>
            <Header></Header>
            <Layout>
                <SingOut></SingOut>
            </Layout>
            <Footer></Footer>
        </>
    );
}
export default App;