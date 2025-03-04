import { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import "./styles.scss";
import { Loading } from "../../components";
import { useAuthContext } from "@/context/AuthContext";

function PrivateLayout() {
  const { user, setShowModalAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setShowModalAuth(true);
      navigate("/login");
    }
  }, [navigate, setShowModalAuth, user]);

  return (
    <Container fluid id="private-layout">
      <div className="private-layout__container">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
}

export { PrivateLayout };
