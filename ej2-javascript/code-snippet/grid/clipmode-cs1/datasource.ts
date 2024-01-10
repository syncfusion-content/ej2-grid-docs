export class Book {

    public RoolNo: number;
    public Name: string;
    public patentfamilies: number;
    public Country: String;
     public mainfields:string;
}

export var ddlData: any = [
  { text: 'Ellipsis', value: 'Ellipsis' },
  { text: 'Clip', value: 'Clip' },
  { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
]

export var data:Book[]=[];
 data.push({RoolNo: 1, Name:"Kia Silverbrook bookbb boookkokki",patentfamilies:4737, Country: "Australia",mainfields:"Printing, Digital paper, Internet, Electronics,Lab-on-a-chip, MEMS, Mechanical, VLSI"});
  data.push({RoolNo: 2, Name:"Shunpei Yamazaki", patentfamilies:4677, Country: "Japan",mainfields:"Thin film transistors, Liquid crystal displays, Solar cells, Flash memory, OLED"});
   data.push({RoolNo: 3, Name:"Lowell L. Wood, Jr.", patentfamilies:1419, Country: "USA",mainfields:"Mosquito laser, Nuclear weapons"});
    data.push({RoolNo: 4, Name:"Paul Lapstun", patentfamilies:1281, Country: "Australia",mainfields:"Printing, Digital paper, Internet, Electronics, CGI, VLSI"});
     data.push({RoolNo: 5, Name:"Gurtej Sandhu", patentfamilies:1255, Country: "India",mainfields:"Thin film processes and materials, VLSI, Semiconductor device fabrication"});
      data.push({RoolNo: 6, Name:"Jun Koyama", patentfamilies:1240, Country: "Japan", mainfields:"Thin film transistors, Liquid crystal displays, OLED"});
       data.push({RoolNo: 7, Name:"Roderick A. Hyde", patentfamilies:1240, Country: "USA",mainfields:"Various"});
        data.push({RoolNo: 8, Name:"Leonard Forbes", patentfamilies:1093, Country: "Canada", mainfields:"Semiconductor Memories, CCDs, Thin film processes and materials, VLSI"});
data.push({RoolNo: 9, Name:"Thomas Edison", patentfamilies:1084, Country: "USA", mainfields:"Electric power, Lighting, Batteries, Phonograph, Cement, Telegraphy, Mining"});
  data.push({RoolNo: 10, Name:"Donald E. Weder", patentfamilies:999, Country: "USA", mainfields:"Florist supplies"});
   data.push({RoolNo: 11, Name:"George Albert Lyon", patentfamilies:993, Country: "Canada", mainfields:"Automotive, Stainless steel products"});
    data.push({RoolNo: 12, Name:"John F. O'Connor", patentfamilies:949, Country: "USA",mainfields:"Railway draft gearing"});
     data.push({RoolNo: 13, Name:"Melvin De Groote	", patentfamilies:2232, Country: "USA",mainfields:"Chemical de-emulsifiers"});
      data.push({RoolNo: 14, Name:"Jay S. Walker	", patentfamilies:1254, Country: "USA", mainfields:"Gaming machines"});
       data.push({RoolNo: 15, Name:"Edward K. Y. Jung	", patentfamilies:689, Country: "USA", mainfields:"Various"});
        data.push({RoolNo: 16, Name:"Francis H. Richards	", patentfamilies:543,Country: "USA", mainfields:"Mechanical, automation"});