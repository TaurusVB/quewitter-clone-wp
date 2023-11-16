import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import Userhero from "@/components/users/Userhero";

import useUser from "@/hooks/useUser";
import PostFeed from "@/components/posts/PostFeed";
import Head from "next/head";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{fetchedUser?.name} profile | Quewitter</title>
        <meta
          name="description"
          content={`Quewitter, Profile page, ${fetchedUser?.email} user`}
        />
      </Head>

      <Header label={fetchedUser.name} showBackArrow />
      <Userhero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
