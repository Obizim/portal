import { Search } from '@/components/forms/search'
import { JbCards } from '@/components/cards/JbCards'
import Styles from '@/pages/jobs/Jobs.module.css'

export default function Jobs() {
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
            <div>
                <input type="checkbox" id="internship" name="internship" value="Internship" />
                <label htmlFor="internship">Internship</label>
            </div>
            <div>
                <input type="checkbox" id="partTime" name="partTime" value="partTime" />
                <label htmlFor="partTime">Part time</label>
            </div>
            <div>
                <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                <label htmlFor="fulltime">Full-time</label>
            </div>
        </div>
    </div>
    <JbCards />
   </div>
</section>
    )
}