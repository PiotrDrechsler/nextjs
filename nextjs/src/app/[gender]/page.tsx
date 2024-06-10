const PARAM_TO_WORD = {
  man: "He is a Man",
  woman: "She is a Woman",
  child: "This is a Child",
};

export default function DynamicRoute({ params }) {
  return <h2>{PARAM_TO_WORD[params.gender]}</h2>;
}

export async function generateStaticParams() {
  return [
    {
      gender: "kobieta",
    },
    {
      gender: "mezczyzna",
    },
    {
      gender: "dziecko",
    },
  ];
}
