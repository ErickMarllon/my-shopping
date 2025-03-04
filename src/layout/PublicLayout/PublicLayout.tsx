import { AuthModal, Loading } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import "./styles.scss";

function PublicLayout() {
  const { showModalAuth } = useAuthContext();

  return (
    <Container fluid id="public-layout">
      {showModalAuth && <AuthModal />}
      <div className="public-layout__container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
}

export { PublicLayout };
