import "../styles/Header.css"; // Import header styles
import "../styles/Footer.css"; // Import footer styles
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* Header appears above all pages */}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer /> {/* Footer appears below all pages */}
    </>
  );
}

export default MyApp;
