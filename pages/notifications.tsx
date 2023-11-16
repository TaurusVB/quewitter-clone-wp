import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications | Quewitter</title>
        <meta name="description" content="Quewitter, Notifications page" />
      </Head>

      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
