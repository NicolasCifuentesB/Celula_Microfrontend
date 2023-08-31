import { useEffect, useState } from "react"; // we need this to make JSX compile
import "../assets/styles/component.css";
import { Api } from "../services/api";

export const Component = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Api.get("/clientes/resumen/123")
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <aside>
      {!data ? (
        <div className="">
          <div className="">
            <div className="">Cargando datos...</div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            <div className="">Data: {data.data}</div>
          </div>
        </div>
      )}
    </aside>
  );
};
