import { PGlite } from '@electric-sql/pglite'
var pg = new PGlite();

import Example from './Example.jsx';

function Examples() {
  return (
    <>

      <h1>Basic SQL Syntax</h1>

      <p>
	This page is running PGLite which is currently running a PostgreSQL server in your browser. You can try out some basic SQL commands below.
      </p>
      
      <Example title='Create Table'
	       text={`
<p>Data is stored in <i>tables</i> which consist of <i>rows</i> (also called <i>records</i>) and <i>columns</i> (also called <i>fields</i>). You make tables with the <i>CREATE TABLE</i> command as shown below. You'll need to make a table in order to run the other examples.</p>
	       <p>So, the example below creates a table called <i>people</i> with three fields. The <i>id</i> field is a unique number. You should give each record in your tables a unique identifier. The <i>SERIAL</i> data type automatically increments each id. <i>SMALLINT</i> represents numbers up to 32,767 which should be adequate for ages.</p>
`}
	       code={`CREATE TABLE people (
  id SERIAL,
  name TEXT,
  age  SMALLINT
);`}
	       pg={pg} />
      

      <p>None of the examples below will work unless you create the <i>people</i> table.</p>
      
      <Example title='Insert Data'
	       text={`The following will insert a single row.`}
	       code={`INSERT INTO people (name,age) VALUES ('Jon', 10);`}
	       pg={pg} />
      
      
      <Example title='Insert More Data'
	       text={`You can insert more than one row at a time as shown below.`}
	       code={`INSERT INTO people (name,age) VALUES ('Jan', 20), ('Dan', 30), ('Eve', 40), ('Tim', 50);`}
	       pg={pg} />
      
      
      <Example title='Select Data'
	       text={`One retrieves data with the <i>SELECT</i> command.`}
	       code={`SELECT name,age FROM PEOPLE;`}
	       pg={pg} />
      
      <Example title='Select All Data'
	       text={`You can use an asterisk to get all of the columns.`}
	       code={`SELECT * FROM PEOPLE;`}
	       pg={pg} />
      
      
      <Example title='Just get a count.'
	       text={`You can use the COUNT function to just get the number of rows.`}
	       code={`SELECT COUNT(*) FROM PEOPLE;`}
	       pg={pg} />
      
      <Example title='Select Some Data'
	       text={`The WHERE clause lets you get certain rows.`}
	       code={`SELECT * FROM PEOPLE WHERE name = 'Jan';`}
	       pg={pg} />
      
      <Example code={`SELECT * FROM PEOPLE WHERE name != 'Jan';`}
	       pg={pg} />
      
      <Example code={`SELECT * FROM PEOPLE WHERE age > 25;`}
	       pg={pg} />
      
      <Example text={`The LIKE clause lets you match a text pattern.`}
	       code={`SELECT * FROM PEOPLE WHERE name LIKE 'J%';`}
	       pg={pg} />

      <Example title='Sort Data'
	       text={`The ORDER clause lets you sort your selection.`}
	       code={`SELECT * FROM PEOPLE ORDER BY age;`}
	       pg={pg} />
      
      <Example 
	       text={`The DESC clause reverses the sort order.`}
	       code={`SELECT * FROM PEOPLE ORDER BY age DESC;`}
	       pg={pg} />
      
      <Example 
	       text={`The LIMIT clause caps the number of rows that are returned.`}
	       code={`SELECT * FROM PEOPLE ORDER BY age DESC LIMIT 2;`}
	       pg={pg} />
      
      <Example title='Change Data'
	       text={`The UPDATE command lets you change the data. You usually use a WHERE clause with this. 
Try running the SELECT examples above after running this.`}
	       code={`UPDATE people SET name='Joni' WHERE name = 'Jon';`}
	       pg={pg} />
      
      <Example title='Delete Data'
	       text={`The DELETE command lets you remove data. Be sure to use a WHERE clause or you'll delete all of the data. 
Try running the SELECT examples above after running this.`}
	       code={`DELETE FROM PEOPLE WHERE name = 'Jan';`}
	       pg={pg} />
      
      <Example title='Change tables'
	       text={`The ALTER command lets you add, remove, or change a tables fields.`}
	       code={`ALTER TABLE people ADD zipcode SMALLINT;`}
	       pg={pg} />
     
      <Example text='Try running the SELECT examples above after running this.'
	       code={`INSERT INTO people (name,age,zipcode) VALUES ('Bob', 60, 12345);`}
	       pg={pg} />
      
      <Example text={`You can rename fields.`}
	       code={`ALTER TABLE people RENAME COLUMN zipcode TO zip;`}
	       pg={pg} />
     
      <Example text={`And you can change their type.`}
	       code={`ALTER TABLE people ALTER COLUMN zip TYPE INT;`}
	       pg={pg} />
     
      <Example title='Remove the table'
	       text={`Use the DROP command if you want to delete the table altogether.`}
	       code={`DROP TABLE people;`}
	       pg={pg} />
     
     
      <footer><a href="https://sean.brunnock.com/">Sean Brunnock</a></footer>

    </>

    
  )
}

export default Examples;

