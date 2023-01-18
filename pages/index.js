import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import CoralList from '../components/corals/CoralList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>coral Data</title>
        <meta name='description' content='browse a huge list of rare corals' />
      </Head>
      <CoralList corals={props.corals} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an api

//   return {
//     props: {
//       corals: DUMMY_CORALS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an api

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rfxjl3d.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const coralsCollection = db.collection('corals');

  const corals = await coralsCollection.find().toArray();

  client.close();

  return {
    props: {
      corals: corals.map((coral) => ({
        id: coral._id.toString(),
        title: coral.title,
        image: coral.image,
        highlight: coral.highlight,
      })),
    }
  };
}

export default HomePage;
