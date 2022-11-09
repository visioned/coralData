import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

import NewCoralForm from "../../components/corals/NewCoralForm";

function NewCoralPage() {
  const router = useRouter();

  async function addCoralHandler(enteredCoralData) {
    await fetch("/api/new-coral", {
      method: "POST",
      body: JSON.stringify(enteredCoralData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>add a new coral</title>
        <meta name="description" content="add your own corals" />
      </Head>
      <NewCoralForm onAddCoral={addCoralHandler} />
    </Fragment>
  );
}

export default NewCoralPage;
