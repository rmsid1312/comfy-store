import { Form, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FormInput, SubmitBtn } from "../components";
import { Button } from "../components/ui/button";
import { useAppDispatch } from "../hooks";
import type { AxiosResponse } from "axios";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "../hooks/use-toast";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const loginAsGuestUser = async ():Promise<void> => {
    try {
      const response:AxiosResponse = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      })
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({username, jwt}))
      navigate('/')
    } catch (error) {
      console.log(error);
      toast({discription: 'Login failed'})
    }
  }
  return <section className="h-screen grid place-items-center">
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form method="post">
          <FormInput type="email" label='email' name="identifier" /> 
          <FormInput type="password"  name="password" /> 
          <SubmitBtn text="Login" className="w-full mt-4" />
          <Button type='button' variant='outline' onClick={loginAsGuestUser} className="w-full mt-4">
            Guest User</Button> 
        </Form>
        <p className="mt-4 text-center">
              Not a member yet ?{" "}
              <Button asChild variant="link" type="button">
                <Link to="/register">Register</Link>
              </Button>
            </p>
      </CardContent>
    </Card>
  </section>;
}
