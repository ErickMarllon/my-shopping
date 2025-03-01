import { Loading } from "@/components";
import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./styles.scss";

const PrivateLayout = () => {
  return (
    <Container fluid id="private-layout">
      <div className="private-layout__container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export { PrivateLayout };
