// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { UseFormReset, UseFormSetError, UseFormWatch } from "react-hook-form";
// import { OrderService } from "../../../../../../../services/orderService";
// import {
//   IOrderLineAddressingFinalize,
//   IOrderLineDevolutionFinalize,
//   IOrderLineReceivingFinalize,
//   IOrderLineSeparationFinalize,
//   IOrderLineShipmentFinalize,
// } from "../../../../../../../services/types";
// import { createToast } from "../../../../../../../utils";
// import { generatePrintTitle, ProcessingTypes } from "../utils";

// type OrderGenericType =
//   | IOrderLineSeparationFinalize
//   | IOrderLineShipmentFinalize
//   | IOrderLineDevolutionFinalize
//   | IOrderLineAddressingFinalize
//   | IOrderLineReceivingFinalize;

// type OrderPrintTYpe = {
//   watchOrderProcessing: UseFormWatch<OrderGenericType>;
//   setErrorOrderProcessing: UseFormSetError<OrderGenericType>;
//   resetOrderProcessing: UseFormReset<OrderGenericType>;
//   processingType: ProcessingTypes;
//   handleScrollToTop: () => void;
//   setShowFinishModal: React.Dispatch<React.SetStateAction<boolean>>;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsBlockFields: React.Dispatch<React.SetStateAction<boolean>>;
//   setNotDisablePrint: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsProcessingFinish: React.Dispatch<React.SetStateAction<boolean>>;
// };

// function useOrderProcessingFinalize({
//   watchOrderProcessing,
//   setErrorOrderProcessing,
//   processingType,
//   handleScrollToTop,
//   setShowFinishModal,
//   setLoading,
//   setIsBlockFields,
//   setNotDisablePrint,
//   setIsProcessingFinish,
// }: OrderPrintTYpe) {
//   const order = watchOrderProcessing();
//   const orderId = order.id_order_load;
//   const queryKey = ["orderProcessing", orderId];

//   const { mutate: orderProcessingFinalize } = useMutation({
//     mutationKey: queryKey,
//     mutationFn: async () => {
//       setLoading(true);
//       if (processingType === "separation") {
//         await OrderService.OrderProcessingSeparationFinalize(
//           order as IOrderLineSeparationFinalize
//         );
//         return;
//       }
//       if (processingType === "shipment") {
//         await OrderService.OrderProcessingShipmentFinalize(
//           order as IOrderLineShipmentFinalize
//         );
//         return;
//       }
//       if (processingType === "devolution") {
//         await OrderService.OrderProcessingDevolutionFinalize(
//           order as IOrderLineDevolutionFinalize
//         );
//         return;
//       }
//       if (processingType === "receiving") {
//         await OrderService.OrderProcessingReceivingFinalize(
//           order as IOrderLineReceivingFinalize
//         );
//         return;
//       }
//       if (processingType === "addressing") {
//         await OrderService.OrderProcessingAddressingFinalize(
//           order as IOrderLineDevolutionFinalize
//         );
//         return;
//       }
//       createToast({
//         type: "error",
//         title: "Erro ao processar",
//         description: `Erro ao processar a ${generatePrintTitle(processingType)} do pedido!`,
//       });
//     },
//     onSuccess: () => {
//       handleScrollToTop();
//       setShowFinishModal(true);
//       setIsBlockFields(true);
//       setNotDisablePrint(true);
//       setIsProcessingFinish(true);
//     },
//     onError: (error) => {
//       if (axios.isAxiosError(error) && error.code === "ERR_BAD_REQUEST") {
//         createToast({
//           type: "error",
//           title: "Erro ao processar",
//           description: error.response?.data.message,
//         });
//       } else {
//         createToast({
//           type: "error",
//           title: "Erro ao processar",
//           description: `Erro ao processar a ${generatePrintTitle(processingType)} do pedido!`,
//         });
//       }
//     },
//     onSettled: () => {
//       setLoading(false);
//     },
//   });

//   async function handleSubmit() {
//     const idUserSeparation = watchOrderProcessing(
//       "id_user_separation_signature"
//     );
//     const signatureFile = watchOrderProcessing("signature_file");

//     const idDriver = watchOrderProcessing("id_driver");
//     const idVehicle = watchOrderProcessing("id_vehicle");
//     const idMotionType = watchOrderProcessing("id_motion_type");

//     if (!idUserSeparation) {
//       setErrorOrderProcessing("id_user_separation_signature", {
//         type: "required",
//       });
//     }

//     if (!signatureFile) {
//       setErrorOrderProcessing("signature_file", { type: "required" });
//     }

//     if (!idUserSeparation && !idDriver && processingType === "shipment") {
//       setErrorOrderProcessing("id_driver", { type: "required" });
//     }

//     if (!idUserSeparation && !idVehicle && processingType === "shipment") {
//       setErrorOrderProcessing("id_vehicle", { type: "required" });
//     }

//     if (!idUserSeparation && !idMotionType && processingType === "shipment") {
//       setErrorOrderProcessing("id_motion_type", { type: "required" });
//     }

//     if (
//       (!idUserSeparation || !signatureFile) &&
//       processingType !== "shipment" &&
//       processingType !== "addressing"
//     ) {
//       return;
//     }

//     if (!idUserSeparation && processingType === "shipment") {
//       if (
//         signatureFile === null ||
//         !idDriver === null ||
//         !idVehicle === undefined ||
//         !!idMotionType === undefined
//       ) {
//         return;
//       }
//     }
//     orderProcessingFinalize();
//   }

//   return { handleSubmit };
// }
// export { useOrderProcessingFinalize };
