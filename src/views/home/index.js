import { Search } from "../../components/forms/search"
import { JobCards } from "../../components/jobcards/jbcard"
import "./home.css"
export const Home = () => {
    return (
        <main className="main_layout">
            <section className="heading">
                <h1 className="title">Find a <span className="titleColor">graduate/internship </span><br /> job around you</h1>
                <p className="subtitle">Thousands of entry-level and internship roles for students across different sectors</p>
                <Search />
            </section>

            <section className="jobs">
                <div className="sidebar">
                    <h2>Resources</h2>
                    <p>Career resources to help you on your journey</p>
                </div>
                <div>
                    <h2>Latest Opportunities</h2>
                    <JobCards />
                </div>
            </section>
        </main>
    )
}