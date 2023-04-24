import { Search } from '@/components/forms/search'
import { JbCards } from '@/components/cards/jbcards'
import Styles from '@/pages/job-boards/Jobs.module.css'
import { useContext } from 'react'
import { authContext } from '@/context/auth'

export default function Jobs() {
    const { jobs } = useContext(authContext)
    return (
        <section className={Styles.viewsJobs}>
            <header className={Styles.header_bg}>
                <h2 className={Styles.bg_title}>Search for jobs</h2>
                <Search />
            </header>

    <div className={Styles.jobs_container}>
        <div className={Styles.filters}>
                <label className={Styles.labelTitle} htmlFor="filter">Filter by</label>
        <div className={Styles.checkboxes}>
            <div className={Styles.box}>
                <input type="radio" id="internship" name="filter" value="internship" />
                <label htmlFor="internship">Internship</label>
            </div>
            <div className={Styles.box}>
                <input type="radio" id="partTime" name="filter" value="partTime" />
                <label htmlFor="partTime">Part time</label>
            </div>
            <div className={Styles.box}>
                <input type="radio" id="fulltime" name="filter" value="fulltime" />
                <label htmlFor="fulltime">Full-time</label>
            </div>
        </div>
    </div>
    {jobs.length === 0 && <div>The search did not match any jobs!!!</div>}
    <JbCards posts={jobs} />
   </div>
</section>
    )
}