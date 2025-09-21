import { LoadingScreen } from "@telefonica/mistica";
import { useEffect, useState } from "react";
import { subscribeLoading } from "../utils/loading";

export default function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeLoading(setLoading);
    return unsubscribe; // limpa listener ao desmontar
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <LoadingScreen
        title="Carregando"
        description="Aguarde enquanto os dados carregam..."
      />
    </div>
  );
}
