import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import { IFormProps } from "@/utils/types";
import React, { FC } from "react";

const Form: FC<IFormProps> = ({ placegolder, postId, isComment }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const {data: currentUser} = useCurrentUser()
  const {mutate: mutatePosts} = usePosts()

  const [body]

  return <div></div>;
};

export default Form;
