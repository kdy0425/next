import '../styles/common.css'
import '../styles/globals.css'
import '../styles/GmarketSans.css';
import 'sweetalert2/dist/sweetalert2.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={Component.headerStyle}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
