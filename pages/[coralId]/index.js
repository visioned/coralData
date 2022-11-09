import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import CoralDetail from "../../components/corals/CoralDetail";

function CoralDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.coralData.title}</title>
        <meta name="description" content={props.coralData.description} />
      </Head>
      <CoralDetail
        image={props.coralData.image}
        title={props.coralData.title}
        highlight={props.coralData.highlight}
        description={props.coralData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://drajreact:KNToqWEHvpsjG18a@cluster0.rfxjl3d.mongodb.net/corals?retryWrites=true&w=majority"
  );
  const db = client.db();

  const coralsCollection = db.collection("corals");

  const corals = await coralsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: corals.map((coral) => ({
      params: { coralId: coral._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for single coral

  const coralId = context.params?.coralId;

  const client = await MongoClient.connect(
    "mongodb+srv://drajreact:KNToqWEHvpsjG18a@cluster0.rfxjl3d.mongodb.net/corals?retryWrites=true&w=majority"
  );
  const db = client.db();

  const coralsCollection = db.collection("corals");

  const selectedCoral = await coralsCollection.findOne({
    _id: ObjectId(coralId),
  });

  client.close();

  return {
    props: {
      coralData: {
        id: selectedCoral._id.toString(),
        title: selectedCoral.title,
        image: selectedCoral.image,
        highlight: selectedCoral.highlight,
        description: selectedCoral.description,
      },
    },
  };
}

export default CoralDetails;
