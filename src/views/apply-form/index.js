import { Button } from "../../components/forms/button"
import { Input } from "../../components/forms/input"


export const Apply = () => {
    return (
        <section className="appy-btn">
            <form>
                <Input name="Firstname" type="text" placeholder="First Name" />
                <Input name="Lastname" type="text" placeholder="Last Name" />
                <Input name="Email" type="email" placeholder="Email address" />
                <Input name="Number" type="number" placeholder="Phone Number" />

                <div className="div-flex">
                <Input name="CV" type="file" placeholder="Upload CV" />
                <Input name="Cover Letter" type="file" placeholder="Upload Cover Letter" />
                </div>
                <Button type="submit" value="Submit"/>
            </form>
        </section>
    )
}