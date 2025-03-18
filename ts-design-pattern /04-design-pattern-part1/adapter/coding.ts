// export {};

// interface Target {
//   getCsvData(): string;
// }

// class NewLibrary {
//   getJsonData() {
//     return [
//       {
//         "data1": "json_dataC",
//         "data2": "json_dataD",
//       },
//       {
//         "data1": "json_dataC",
//         "data2": "json_dataD",
//       },
//     ];
//   }
// }

// class JsonToCsvAdapter extends NewLibrary implements Target {
//   getCsvData(): string {
//     const jsonData = this.getCsvData();

//     const header = Object.keys(jsonData[0]).join(",") + "\n";
//     const body = jsonData
//       .map((d) => {
//         return Object.keys(d)
//           .map((key) => d[key])
//           .join(",");
//       })
//       .join("\n");

//     return header + body;
//   }
// }

// function run() {
//   const adaptee = new NewLibrary();
//   console.log(adaptee.getJsonData());

//   const adapter = new JsonToCsvAdapter();
//   console.log(adapter.getCsvData());
// }
