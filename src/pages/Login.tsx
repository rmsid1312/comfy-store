import { Form, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FormInput, SubmitBtn } from "../components";
import { Button } from "../components/ui/button";

export default function Login() {
  const loginAsGuestUser = () => {
    console.log('Guest User')
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
