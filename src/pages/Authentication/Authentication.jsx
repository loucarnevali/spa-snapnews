import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { AuthContainer, Section } from './AuthenticationStyled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../../schemas/signupSchema';
import { signinSchema } from '../../schemas/signinSchema';
import { ErrorSpan } from '../../components/Navbar/NavbarStyled';
import { signin, signup } from '../../services/userServices';
import Cookies from 'js-cookie';

export default function Authentication() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set('token', response.data, { expires: 1 });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set('token', response.data, { expires: 1 });

      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
          />
          {errorsSignin.email && (
            <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignin}
          />
          {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}

          <Button type="submit" text="Sign In" />
        </form>
      </Section>

      <Section type="signup">
        <h2>Register</h2>

        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}

          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}

          <Button type="submit" text="Register" />
        </form>
      </Section>
    </AuthContainer>
  );
}
