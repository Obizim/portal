import "./home.css"
export const Home = () => {
    return (
        <main className="main_layout">
            <section className="heading">
                <h1 className="title">Find a <span className="titleColor">graduate/internship </span><br /> job around you</h1>
                <p className="subtitle">Thousands of entry-level and internship roles for students across different sectors</p>

                <form>
                    <div className="form_title">
                        <input type="text" placeholder="What position are you looking for?" />
                    </div>
                    <div className="form_location">
                        <input type="text" placeholder="Location" />
                    </div>
                    <button type="submit" className="submit">Search job</button>
                </form>
            </section>
        </main>
    )
}