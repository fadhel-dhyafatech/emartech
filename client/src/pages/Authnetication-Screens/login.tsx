import { FC, useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { signInService } from "@/services/userServiceCalls";
import { InputField } from "@/components/inputs";
import { ButtonVariants } from "@/components/constants";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useForm } from "@/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { loginFormSchema } from "@/schemas";

import { AuthenticationWrapper } from "./authenticationWrapper";
import { StyledCollapse } from "@/styles";
import { useAuth } from "@/contextProviders/authentication";
import { setUserInLocalStorage } from "../../utils";

const initialValues = {
  email: "",
  password: "",
};

export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth() as any;

  const handleSubmitAction = useCallback(
    (values: any) => {
      setIsSubmitting(true);
      signInService(values, (err: any, response: any) => {
        setIsSubmitting(false);
        if (err) setLoginError(true);
        if (response) {
          setUserInLocalStorage(response);
          setUser(response);
          navigate("/home");
        }
      });
    },
    [navigate, setUser]
  );

  const { values, handleChange, handleSubmit, isValid } = useForm({
    initialValues,
    handleSubmitAction,
    validationSchema: loginFormSchema,
  });

  return (
    <AuthenticationWrapper backgroundImageUrl="../../../src/assets/login.png">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography className="auth-heading">Login</Typography>
        <Box className="form-container flex-center">
          <StyledCollapse in={loginError}>
            <Alert severity="error" onClose={() => setLoginError(false)}>
              Invalid credentials
            </Alert>
          </StyledCollapse>
          <InputField
            label="Email address or phone number"
            labelClassName="input-label"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <InputField
            value={values.password}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            labelClassName="input-label"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <Icon icon="eva:eye-fill" />
                    ) : (
                      <Icon icon="eva:eye-off-fill" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
          <Button
            className="auth-btn input-label"
            disabled={!isValid || isSubmitting}
            type="submit"
            variant={ButtonVariants.OUTLINED}
          >
            Login
          </Button>
        </Box>
        <Box className="link-holder">
          <Link href="/forgotPassword" className="link input-label">
            Forgot Password?
          </Link>
        </Box>
        <Box>
          <Box className="flex-center position-relative divider-box">
            <Divider />
            <Box component={"span"} className="span-content input-label">
              Or login using
            </Box>
          </Box>
          <Box className="flex-center flex-col">
            <Button className="input-label" variant={ButtonVariants.OUTLINED}>
              <GoogleIcon />
              Continue with Google
            </Button>
            <Button className="input-label" variant={ButtonVariants.OUTLINED}>
              <AppleIcon />
              Continue with Apple
            </Button>
          </Box>
          <Box className="flex-center sign-up-box">
            <Typography
              className="input-label text-center"
              variant="body1"
              gutterBottom
            >
              Don't have an account?
              <Link href="/signup" className="link sign-up">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </AuthenticationWrapper>
  );
};
