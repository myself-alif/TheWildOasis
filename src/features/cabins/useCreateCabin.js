import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createOrUpdateCabin(newCabin),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("New cabin added successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isCreating,
    createCabin,
  };
}
