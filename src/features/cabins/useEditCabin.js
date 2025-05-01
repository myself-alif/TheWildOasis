import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createOrUpdateCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("New cabin updated successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    editCabin,
    isEditing,
  };
}
