import { Button } from '@/components/forms/button';
import { Input } from '@/components/forms/input';
import { Select } from '@/components/forms/select';
import { authContext } from '@/context/auth';
import Styles from '@/pages/auth/auth.module.css'


export default function Login() {
    return (
      <section className={Styles.authContainer}>
        <h2 className={Styles.title}>Login</h2>
        <form className={Styles.authForm}>
          <Select />
          <Input name="Email" type="email" placeholder="Email address" />
          <Input name="Password" type="password" placeholder="Password" />
          <Button type="submit" value="Login" />
        </form>
      </section>
    );
  };