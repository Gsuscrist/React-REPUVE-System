
import Layout from '../containers/Layout'
import Header from "../components/Header";
import Home from "../containers/Home";
import Footer from "../components/Footer";

function App(){
    return(
        <>
            <Header></Header>
            <Layout>
            <Home></Home>
            </Layout>
            <Footer></Footer>
        </>
    );
}
export default App;