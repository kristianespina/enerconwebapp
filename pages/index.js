import styles from '../styles/Home.module.css'

import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <Sidebar />
      <Main />
    </div>
  )
}
