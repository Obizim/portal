import { Search } from '@/components/forms/search'
import { JbCards } from '@/components/cards/jbcards'
import Styles from '@/pages/job-boards/Jobs.module.css'
import { useContext, useState } from 'react'
import { authContext } from '@/context/auth'
import { FiAlertCircle } from 'react-icons/fi'

export default function Jobs() {
    const { jobs } = useContext(authContext)
    const [sort, setSort] = useState("")

    const sortType = () => {
        if(sort === "full-time") {
           return jobs.filter((r) => r.type === "full-time")
        }else if(sort === "part-time") {
           return jobs.filter((r) => r.type === "part-time")
        }else if(sort === "internship") {
            return jobs.filter((r) => r.type === "internship")
        }else {
            return jobs
        }
    }
    
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
                <input type="radio" id="internship" name="filter" value="internship" onChange={(e) => setSort(e.target.value)} />
                <label htmlFor="internship">Internship</label>
            </div>
            <div className={Styles.box}>
                <input type="radio" id="partTime" name="filter" value="part-time" onChange={(e) => setSort(e.target.value)} />
                <label htmlFor="partTime">Part time</label>
            </div>
            <div className={Styles.box}>
                <input type="radio" id="fulltime" name="filter" value="full-time" onChange={(e) => setSort(e.target.value)} />
                <label htmlFor="fulltime">Full-time</label>
            </div>
        </div>
    </div>
    {sortType().length === 0 && <div className={Styles.empty}>
        <h1>The search did not match any jobs!!!</h1>
        <p><FiAlertCircle /></p>
        </div>}
    <JbCards posts={sortType()} />
   </div>
</section>
    )
}