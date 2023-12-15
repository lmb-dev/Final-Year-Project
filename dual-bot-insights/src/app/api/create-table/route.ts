import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
      const { dbList } = await request.json();

      const result =
        await sql`
        INSERT INTO results_table (
          demographic1, demographic2, demographic3, demographic4, BFI1, BFI2, BFI3, BFI4, BFI5, BFI6, BFI7, BFI8, BFI9, BFI10, BFI11, BFI12, BFI13, BFI14, BFI15, GAAIS1, GAAIS2, GAAIS3, GAAIS4, GAAIS5, GAAIS6, GAAIS7, GAAIS8, bot1Chatbot, bot1Messages, bot1Q1, bot1Q2, bot1Q3, bot1Q4, bot2Chatbot, bot2Messages, bot2Q1, bot2Q2, bot2Q3, bot2Q4
        )
        VALUES (
          ${dbList[0]}, ${dbList[1]}, ${dbList[2]}, ${dbList[3]}, ${dbList[4]}, ${dbList[5]}, ${dbList[6]}, ${dbList[7]}, ${dbList[8]}, ${dbList[9]}, ${dbList[10]}, ${dbList[11]}, ${dbList[12]}, ${dbList[13]}, ${dbList[14]}, ${dbList[15]}, ${dbList[16]}, ${dbList[17]}, ${dbList[18]}, ${dbList[19]}, ${dbList[20]}, ${dbList[21]}, ${dbList[22]}, ${dbList[23]}, ${dbList[24]}, ${dbList[25]}, ${dbList[26]}, ${dbList[27]}, ${dbList[28]}, ${dbList[29]}, ${dbList[30]}, ${dbList[31]}, ${dbList[32]}, ${dbList[33]}, ${dbList[34]}, ${dbList[35]}, ${dbList[36]}, ${dbList[37]}, ${dbList[38]} 
        )`;
      return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

