import { GetStaticPaths, GetStaticProps } from "next";

interface Ninja {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
}

interface DetailsProps {
  ninja: Ninja;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Ninja[] = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false, // beyond the scope, id doesn't exist, go to 404
  };
};

export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: Ninja = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }: DetailsProps) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
