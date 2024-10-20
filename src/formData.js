export const bloodGroupList = [
  { name: "група крові", value: "" },
  { name: "0(I)", value: "0(I)" },
  { name: "A(II)", value: "A(II)" },
  { name: "B(III)", value: "B(III)" },
  { name: "AB(IV)", value: "AB(IV)" }
];
export const rezusFactorList = [
  { name: "резус-фактор", value: "" },
  { name: "+", value: "+" },
  { name: "-", value: "-" }
];
export const doctors = [
  { name: "Особистий лікар", value: "" },
  { name: "Брик Л.М.", value: "Брик Л.М." },
  { name: "Корицький В.Г.", value: "Корицький В.Г." },
  { name: "Куц О.В.", value: "Куц О.В." },
  { name: "Кучмій В.Я.", value: "Кучмій В.Я." },
  { name: "Лучанко В.І.", value: "Лучанко В.І." },
  { name: "Омеляш В.І.", value: "Омеляш В.І." },
  { name: "Панченко В.А.", value: "Панченко В.А." },
  { name: "Питляр О.В.", value: "Питляр О.В." },
  { name: "Піх І.І.", value: "Піх І.І." },
  { name: "Шмигельська М.Б.", value: "Шмигельська М.Б." },
  { name: "Яшан О.І.", value: "Яшан О.І." },
  { name: "Дзіх О.І.", value: "Дзіх О.І." },
  { name: "Андрейчин Ю.М.", value: "Андрейчин Ю.М." }

  // { name: "", value: "" },
];
export const surgeons = [{ name: "Хірург", value: "" }].concat(
  doctors.slice(1)
);
export const assistants = [{ name: "Асистент", value: "" }].concat(
  doctors.slice(1)
);
export const diagnosisTypeList = [
  { name: "Діагноз", diagnosis: "", operation: "", time: 0 },
  {
    name: "Аденоїди",
    diagnosis: "Аденоїди III ступеню",
    operation: "Аденотомія",
    time: 30
  },
  {
    name: "Епітимпаніт",
    diagnosis: "Хронічний правобічний епітимпаніт",
    operation: "Тимпанопластика праворуч",
    time: 40
  },
  {
    name: "Множинний карієс",
    diagnosis: "Множинний карієс зубів",
    operation: "Санація порожнини рота",
    time: 0
  },
  {
    name: "Коротка вуздечка язика",
    diagnosis: "Коротка вуздечка язика",
    operation: "Пластична френулотомія язика",
    time: 30
  },
  {
    name: "Коротка вуздечка верхньої губи",
    diagnosis: "Коротка вуздечка верхньої губи",
    operation: "Пластична френулотомія верхньої губи",
    time: 30
  },
  {
    name: "Новоутвір",
    diagnosis: "Новоутвір",
    operation: "Ексцизійна біопсія новоутвору",
    time: 30
  },
  {
    name: "Кіста верхньої щелепи",
    diagnosis: "Кіста верхньої щелепи",
    operation: "Цистектомія верхньої щелепи",
    time: 60
  },
  {
    name: "Кіста нижньої щелепи",
    diagnosis: "Кіста нижньої щелепи",
    operation: "Цистектомія нижньої щелепи",
    time: 60
  },
  {
    name: "Ретенція зубів",
    diagnosis: "Ретенція зубів",
    operation: "Атипове видалення зубів",
    time: 60
  },
  {
    name: "Надкомплектні зуби",
    diagnosis: "Надкомплектні дистоповані зуби",
    operation: "Видалення надкомплектних зубів",
    time: 0
  }
];
export const emptyPatient = {
  name: "",
  bloodGroup: "",
  rezusFactor: "",
  age: 18,
  room: "",
  diagnosis: "",
  operation: "",
  surgeon: "",
  assistant: "",
  time: 0
};
