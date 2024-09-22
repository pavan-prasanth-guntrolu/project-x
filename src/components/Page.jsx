import Box from "../Box";

const data = [
  { id: 1, question: "jktlajtla" },
  { id: 2, question: "jktlajtla" },
  { id: 3, question: "jktlajtla" },
  { id: 4, question: "jktlajtla" },
  { id: 5, question: "jktlajtla" },
  { id: 6, question: "jktlajtla" },
  { id: 7, question: "jktlajtla" },
  { id: 8, question: "jktlajtla" },
  { id: 9, question: "jktlajtla" },
  { id: 10, question: "jktlajtla" },
  { id: 11, question: "jktlajtla" },
  { id: 12, question: "jktlajtla" },
  { id: 13, question: "jktlajtla" },
  { id: 14, question: "jktlajtla" },
  { id: 15, question: "jktlajtla" },
  { id: 16, question: "jktlajtla" },
  { id: 17, question: "jktlajtla" },
  { id: 18, question: "jktlajtla" },
  { id: 19, question: "jktlajtla" },
  { id: 20, question: "jktlajtla" },
];

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "5px",
};

function Page() {
  return (
    <div style={style}>
      {data.map((item) => (
        <Box key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Page;
