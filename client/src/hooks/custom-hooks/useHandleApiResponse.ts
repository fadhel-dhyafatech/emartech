import { useEffect } from "react";
import { useSnackbar } from "notistack";

import { IAPIError } from "@/types/general";
import { isBadRequest, isUnexpectedError } from "@/utils";

function useHandleApiResponse(
  error: Error,
  isSuccess?: boolean,
  successMessage?: string
): null {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isSuccess && successMessage) {
      enqueueSnackbar(successMessage, { variant: "success" });
    }
  }, [isSuccess, enqueueSnackbar, successMessage]);

  useEffect(() => {
    if (error && !isBadRequest(error) && !isUnexpectedError(error)) {
      enqueueSnackbar((error as IAPIError).data.message, { variant: "error" });
    }

    if (isUnexpectedError(error)) {
      enqueueSnackbar("unexpected_error_occurred"),
        {
          variant: "error",
        };
    }
  }, [enqueueSnackbar, error]);

  return null;
}

export default useHandleApiResponse;
