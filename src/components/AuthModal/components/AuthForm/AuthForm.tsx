import { Form, InputGroup, Row } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";
import { IAuthModalFormProps } from "../../types";
import { AuthFormData } from "./authSchema";
import "./styles.scss";

function AuthForm({ isSign }: IAuthModalFormProps) {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<AuthFormData>();

  return (
    <form className="auth-modal-form">
      <Controller
        name="username"
        rules={{ required: true }}
        control={control}
        render={({ field: { onChange, value: changeValue } }) => (
          <Row>
            <label className="form-label" htmlFor="username">
              username
            </label>
            <InputGroup>
              <Form.Control
                onChange={(value) => {
                  clearErrors("username");
                  onChange(value);
                }}
                value={changeValue}
                className={`${errors?.username ? "error" : ""}`}
                placeholder="Username"
              />
            </InputGroup>
          </Row>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Row>
            <label className="form-label" htmlFor="email">
              email
            </label>
            <InputGroup>
              <Form.Control
                onChange={(value) => {
                  clearErrors("email");
                  onChange(value);
                }}
                value={value}
                className={`${errors?.email ? "error" : ""}`}
                placeholder="example@email.com"
              />
            </InputGroup>
          </Row>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Row className={`${isSign ? "is-sign" : ""}`}>
            <label className="form-label" htmlFor="password">
              password
            </label>
            <InputGroup>
              <Form.Control
                onChange={(value) => {
                  clearErrors("password");
                  onChange(value);
                }}
                value={value}
                className={`${errors?.password ? "error" : ""}`}
                placeholder="Password"
              />
            </InputGroup>
          </Row>
        )}
      />
    </form>
  );
}

export { AuthForm };
