import { Toast } from "@/components";
import { AuthService } from "@/services/authService";
import { ICreateSessionParams } from "@/services/authService/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useOrderLines = () => {
  const { mutate: orderProcessingFinalize } = useMutation<
    void,
    unknown,
    ICreateSessionParams
  >({
    mutationKey: ["auth-register"],
    mutationFn: async (data) => {
      await AuthService.register(data);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.code === "ERR_BAD_REQUEST") {
        Toast({
          type: "error",
          title: "Erro ao processar",
          message: error.response?.data.message,
        });
      } else {
        Toast({
          type: "error",
          title: "Erro ao processar",
          message: `Erro ao cadastrar usuário!`,
        });
      }
    },
    onSettled: () => {
      console.log("calback finalize");
    },
  });
  return { orderProcessingFinalize };
};

export { useOrderLines };
