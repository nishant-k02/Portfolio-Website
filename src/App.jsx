/**
 * Copyright 2024 Nishant Khandhar
 * @license Apache-2.0
 */

/**
 * Components
 */

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
            </main>

        </>
    )
}

export default App