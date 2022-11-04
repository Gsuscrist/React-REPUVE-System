import Layout from "../containers/Layout";
import Header from "../components/Header";
import SingOut from "../components/SingOut";
import Footer from "../components/Footer";


function App() {
      return (
            <main>
                <Header></Header>
                <Layout>
                    <SingOut></SingOut>
                </Layout>
                <Footer></Footer> 
            </main>
          );
}

export default App;