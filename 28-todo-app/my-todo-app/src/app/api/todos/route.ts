import { NextRequest, NextResponse } from "next/server";
import sql from "../../../../lib/db";

export async function GET(request: NextRequest) {
  const alltodos = await sql`SELECT * FROM todos;`;
  return NextResponse.json(alltodos);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newTodo = await sql`
      INSERT INTO todos (text, id)
      VALUES (${data.text}, ${data.id})
      RETURNING *;
  `;
  // Ensure we're returning a valid JSON response
  if (newTodo && newTodo[0]) {
    return NextResponse.json(newTodo[0]);
  }
  // Return a default response if insertion fails
  return NextResponse.json({ error: "Failed to create todo" }, { status: 400 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  
  // First delete the todo
  await sql`DELETE FROM todos WHERE id = ${id}`;
  
  // Then get all remaining todos with reindexed IDs
  const updatedTodos = await sql`
    WITH reindexed AS (
      SELECT id,
             text,
             ROW_NUMBER() OVER (ORDER BY id) as new_id
      FROM todos
    )
    UPDATE todos t
    SET id = r.new_id
    FROM reindexed r
    WHERE t.id = r.id
    RETURNING *;
  `;
  
  return NextResponse.json(updatedTodos);
}



export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate input
    if (!data.id || !data.text) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Update the todo
    const updatedTodo = await sql`
      UPDATE todos
      SET text = ${data.text}
      WHERE id = ${data.id}
      RETURNING *;
    `;

    // Return the updated todo
    return NextResponse.json(updatedTodo[0]);
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
  }
}
