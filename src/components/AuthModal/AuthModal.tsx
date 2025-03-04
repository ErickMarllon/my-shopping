import { useAuthContext } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { formDefaultValue } from "../HelperText/constants";
import { AuthFooter, AuthForm, AuthHeader } from "./components";
import { AuthFormData, authSchema } from "./components/AuthForm/authSchema";
import "./styles.scss";

function AuthModal() {
  const { user } = useAuthContext();
  const [isSign, setIsSign] = useState<boolean>(true);

  function handleToggleAction() {
    setIsSign(!isSign);
  }

  const methods = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: formDefaultValue,
  });

  return (
    <FormProvider {...methods}>
      <Modal show={!user} className="auth-modal-container">
        <Modal.Body>
          <AuthHeader />
          <AuthForm isSign={isSign} />
          <AuthFooter onActionType={handleToggleAction} />
        </Modal.Body>
      </Modal>
    </FormProvider>
  );
}

export { AuthModal };
