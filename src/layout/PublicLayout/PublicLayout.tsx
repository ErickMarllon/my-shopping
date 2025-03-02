import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./styles.scss";
import { Loading } from "@/components";

function PublicLayout() {
  return (
    <Container fluid id="public-layout">
      <div className="public-layout__container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
}

export { PublicLayout };
