import { Button } from '@/components/forms/button';
import { Input } from '@/components/forms/input';
import { Select } from '@/components/forms/select';
import Styles from '@/pages/auth/auth.module.css'

export default function Signup() {
    return (
      <section className={Styles.authContainer}>
        <h2 className={Styles.title}>Create Account</h2>
        <form className={Styles.authForm}>
          <Select />
          <Input name="Name" type="text" placeholder="Name/Company Name" />
          <Input name="Email" type="email" placeholder="Email address" />
          <Input name="Password" type="password" placeholder="Password" />
          <Button type="submit" value="Create account" />
        </form>
      </section>
    );
  };
  