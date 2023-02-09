import { JobCards } from "../../jobcards/jbcard"
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

            <section className="jobs">
                <div className="filters">
                    <label className="labelTitle" htmlFor="filter">Filter by</label>
                    <div className="checkboxes">
                        <div>
                            <input type="checkbox" id="internship" name="internship" value="Internship" />
                            <label for="internship">Internship</label>
                        </div>
                        <div>
                            <input type="checkbox" id="partTime" name="partTime" value="partTime" />
                            <label for="partTime">Part time</label>
                        </div>
                        <div>
                            <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                            <label for="fulltime">Full-time</label>
                        </div>
                    </div>
                </div>
                <JobCards />
            </section>
        </main>
    )
}