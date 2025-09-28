import { Form, Link, redirect, type ActionFunction } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { FormInput } from "../components";
import { Button } from "../components/ui/button";
import { customFetch } from "../utils";
import { toast } from "../hooks/use-toast";
import { AxiosError } from "axios";

export const action: ActionFunction = async ({ request }): Promise<null | Response> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log(data);  
    const result = await customFetch.post('/auth/local/register', data);
    toast({description: 'Registered'})
    return redirect('/login');
  } catch (error) {
    console.log(error);
    const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'Registraion Failed'    
    toast({description: errorMsg})
    return null;
  }
};

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput
              type="text"
              name="username"
              defaultValue="test"
            ></FormInput>
            <FormInput
              type="text"
              name="email"
              defaultValue="test@gmail.com"
            ></FormInput>
            <FormInput
              type="text"
              name="password"
              defaultValue="secret"
            ></FormInput>
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
            <p className="mt-4 text-center">
              Already member ?{" "}
              <Button asChild variant="link" type="button">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
